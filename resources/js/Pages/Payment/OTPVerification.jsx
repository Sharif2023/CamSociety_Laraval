import { useState } from "react";
import OTPInput from "react-otp-input";
import { router } from "@inertiajs/react";

const OTPVerification = ({ email }) => {
    const [otp, setOtp] = useState("");  // The state for OTP input
    const [error, setError] = useState("");  // For handling errors

    // Handle OTP input change
    const handleOtpChange = (otpValue) => {
        setOtp(otpValue);
    };

    // Handle OTP verification
    const handleVerifyOtp = () => {
        if (otp.length === 6) {
            router.post(
                "/verify-otp",
                { email, otp },
                {
                    onSuccess: (page) => {
                        alert(page.props.flash.success || "OTP Verified Successfully!");
                    },
                    onError: (errors) => {
                        setError(errors.message || "Invalid OTP. Please try again.");
                    },
                }
            );
            // console.log(otp);
            
        } else {
            setError("OTP must be 6 digits.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Verify OTP
                </h2>
                <p className="text-gray-600 mb-4 text-center">
                    Please enter the OTP sent to <strong>{email}</strong>
                </p>

                {/* OTP Input */}
                <div className="flex justify-center mb-4">
                    <OTPInput
                        value={otp}
                        onChange={handleOtpChange}
                        numInputs={6}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        renderSeparator={<span className="mx-1 text-gray-500">-</span>}
                        renderInput={(props) => (
                            <input
                                {...props}
                                className="w-12 h-12 text-center text-lg text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    />
                </div>

                {/* Error message */}
                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                {/* Verify OTP Button */}
                <button
                    onClick={handleVerifyOtp}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Verify OTP
                </button>
            </div>
        </div>
    );
};

export default OTPVerification;
