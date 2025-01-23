import React from "react";
import { Link, usePage } from "@inertiajs/react";

const TransactionSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
                    Transaction Successful!
                </h2>
                <p className="text-gray-700 text-center mb-6">
                    Thank you for your purchase! Your transaction has been processed successfully.
                </p>
                <div className="flex flex-col space-y-4">
                    {/* Go to Dashboard Button */}
                    <Link
                        href={route('dashboard')}
                        className="w-full bg-blue-500 text-white py-3 text-center rounded-lg shadow-md hover:bg-blue-600 transition-all"
                    >
                        Go to Dashboard
                    </Link>
                    {/* View Transaction History Button */}
                    <Link
                        href={route('transactions')}
                        className="w-full bg-gray-500 text-center text-white py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all"
                    >
                        View Transaction History
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TransactionSuccess;
