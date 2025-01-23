<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OTP;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendOTP;
use App\Models\Cart;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaymentController extends Controller
{
    // Generate and send OTP
    public function sendOTP(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $email = $request->input('email');
        $otp = rand(100000, 999999);

        // Throttle OTP generation
        $recentOtp = OTP::where('email', $email)->where('created_at', '>=', now()->subMinute())->first();
        if ($recentOtp) {
            return response()->json(['message' => 'Please wait before requesting another OTP'], 429);
        }

        OTP::updateOrCreate(
            ['email' => $email],
            ['otp' => $otp, 'expires_at' => now()->addMinutes(5)]
        );

        try {
            Mail::to($email)->send(new SendOTP($otp));
        } catch (\Exception $e) {
            \Log::error('Failed to send OTP email: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to send OTP'], 500);
        }

        return response()->json(['message' => 'OTP sent successfully']);
    }





    // Verify OTP
    public function verifyOTP(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|numeric',
            'photoIds' => 'required|array', // Validate that photoIds is an array
            'total' => 'required|numeric', // Ensure total amount is provided
        ]);

        $otp = OTP::where('email', $request->email)
            ->where('otp', $request->otp)
            ->where('expires_at', '>=', now())
            ->first();

        if (!$otp) {
            return response()->json(['message' => 'Invalid or expired OTP'], 400);
        }

        $otp->delete();

        // delete cart item from database
        $cart = Cart::where('user_id', Auth::id())->delete();

        $transaction = Transaction::create([
            'email' => $request->email,
            'total_amount' => $request->total,
            'transaction_id' => uniqid('txn_'),
            'transaction_date' => now(),
            'made_by' => Auth::id(),
            'status' => 'success',
            'photo_ids' => $request->photoIds,
        ]);

        return redirect()->route('transaction.success')->with('transaction', $transaction);
    }


    public function index(Request $request)
    {
        $email = $request->email;
        $photoIds = $request->photo_sell_id;
        $total = $request->total;

        // Store email in session for verification
        $request->session()->put('email', $email);

        $this->sendOTP($request);

        return Inertia::render('Payment/OTPVerification', [
            'email' => $email,
            'photoIds' => $photoIds,
            'total' => $total
        ]);
    }
}
