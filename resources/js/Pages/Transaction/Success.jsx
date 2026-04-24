import React from "react";
import { Link, usePage } from "@inertiajs/react";

const TransactionSuccess = () => {
    const { auth, flash } = usePage().props;
    const dashboardRoute =
        auth.role === "photographer" ? "photographer.dashboard" : "dashboard";
    const transaction = flash.transaction;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
                    Transaction Successful!
                </h2>
                <p className="text-gray-700 text-center mb-6">
                    Thank you for your purchase! Your transaction has been processed successfully.
                </p>
                {transaction && (
                    <div className="mb-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                        <p><strong>Transaction ID:</strong> {transaction.transaction_id}</p>
                        <p><strong>Total:</strong> ${transaction.total_amount}</p>
                    </div>
                )}
                <div className="flex flex-col space-y-4">
                    {/* Go to Dashboard Button */}
                    <Link
                        href={route(dashboardRoute)}
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
