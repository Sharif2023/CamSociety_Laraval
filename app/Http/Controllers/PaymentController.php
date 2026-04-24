<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\OTP;
use App\Models\Transaction;
use App\Models\User;
use App\Mail\SendOTP;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PaymentController extends Controller
{
    public function sendOTP(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => 'required|email',
        ]);

        [$status, $message] = $this->dispatchOtp($validated['email']);

        return response()->json(['message' => $message], $status);
    }

    public function verifyOTP(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'otp' => 'required|digits:6',
        ]);

        $otp = OTP::where('email', $validated['email'])
            ->where('otp', $validated['otp'])
            ->where('expires_at', '>=', now())
            ->first();

        if (!$otp) {
            throw ValidationException::withMessages([
                'otp' => 'Invalid or expired OTP.',
            ]);
        }

        $cartItems = $this->pendingCartItems($request->user());

        if ($cartItems->isEmpty()) {
            throw ValidationException::withMessages([
                'otp' => 'Your cart is empty.',
            ]);
        }

        $otp->delete();

        $total = $this->calculateTotal($cartItems);
        $photoIds = $cartItems->pluck('cart_item_id')->values()->all();

        $transaction = Transaction::create([
            'email' => $validated['email'],
            'total_amount' => $total,
            'transaction_id' => uniqid('txn_'),
            'transaction_date' => now(),
            'made_by' => Auth::id(),
            'status' => 'success',
            'photo_ids' => $photoIds,
        ]);

        Cart::where('user_id', Auth::id())
            ->where('status', 'pending')
            ->delete();

        return redirect()->route('transaction.success')->with([
            'success' => 'Payment verified successfully.',
            'transaction' => $transaction,
        ]);
    }


    public function index(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
        ]);

        $cartItems = $this->pendingCartItems($request->user());

        if ($cartItems->isEmpty()) {
            return redirect()->route('cart.index')->with('error', 'Your cart is empty.');
        }

        [$status, $message] = $this->dispatchOtp($validated['email']);

        if ($status !== 200) {
            return redirect()->route('cart.index')->with('error', $message);
        }

        return Inertia::render('Payment/OTPVerification', [
            'email' => $validated['email'],
            'photoIds' => $cartItems->pluck('cart_item_id')->values(),
            'total' => $this->calculateTotal($cartItems),
        ]);
    }

    protected function pendingCartItems(User $user): Collection
    {
        return Cart::where('user_id', $user->id)
            ->where('status', 'pending')
            ->with('photoSell')
            ->get();
    }

    protected function calculateTotal(Collection $cartItems): float
    {
        $subtotal = $cartItems->sum(function (Cart $item) {
            return ((float) $item->photoSell?->price) * (int) $item->quantity;
        });

        $shipping = $subtotal > 0 ? 2.00 : 0.00;
        $tax = $subtotal * 0.10;

        return round($subtotal + $shipping + $tax, 2);
    }

    protected function dispatchOtp(string $email): array
    {
        $recentOtp = OTP::where('email', $email)
            ->where('created_at', '>=', now()->subMinute())
            ->first();

        if ($recentOtp) {
            return [429, 'Please wait before requesting another OTP.'];
        }

        $otp = (string) random_int(100000, 999999);

        OTP::updateOrCreate(
            ['email' => $email],
            ['otp' => $otp, 'expires_at' => now()->addMinutes(5)]
        );

        try {
            Mail::to($email)->send(new SendOTP($otp));
        } catch (\Throwable $exception) {
            report($exception);

            return [500, 'Failed to send OTP. Please try again.'];
        }

        return [200, 'OTP sent successfully.'];
    }
}
