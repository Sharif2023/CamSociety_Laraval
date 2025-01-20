<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\OTP;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendOTP;
use Inertia\Inertia;

class PaymentController extends Controller
{
    // public function sendMail()
    // {
    //     try {
    //         $toEmailAddr = "jabalenuradnan6@gmail.com";
    //         $welcomeMessage = "Welcome to our website";

    //         $response = Mail::to($toEmailAddr)->send(new SendOTP($welcomeMessage));
    //         dd($response);

    //     } catch ( Exception $e) {
    //         \Log::error($e->getMessage());
    //     }
    // }


    // Generate and send OTP
    public function sendOTP(Request $request)
    {

        // Validate request
        $request->validate([
            'email' => 'required|email'
        ]);

        // Extract email
        $email = $request->input('userDetails.email');

        // Generate random OTP
        $otp = rand(100000, 999999);

        // Store OTP in the database with an expiry time (optional)
        // update otp if exists
        OTP::updateOrCreate(
            ['email' => $email??$request->email],
            ['otp' => $otp, 'expires_at' => now()->addMinutes(5)]
        );

        // Send OTP via email
        Mail::to($request->email)->send(new SendOTP($otp));

        // Redirect to OTP verification page with user details
        return response()->json(['message' => 'OTP sent successfully']);
    }

    // Verify OTP
    public function verifyOTP(Request $request)
    {
        // Validate request
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|numeric'
        ]);
        
        $otp = OTP::where('email', $request->email)
            ->where('otp', $request->otp)
            // ->where('expires_at', '>=', now())
            ->first();

        if (!$otp) {
            return response()->json(['message' => 'Invalid OTP'], 400);
        }

        // OTP is valid, proceed with the order (you can add more logic here)
        return response()->json(['message' => 'OTP verified successfully']);
    }

    public function index(Request $request)
    {
        // send otp and redirect to OTP verification page
        $this->sendOTP($request);
        
        return Inertia::render('Payment/OTPVerification', [
            'email' => $request->session()->get('email')
        ]);
    }
}
