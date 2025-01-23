import React from "react";
import { usePage } from "@inertiajs/react";

const Transactions = () => {
    const { transactions } = usePage().props;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Transaction History
                </h2>

                {transactions.length > 0 ? (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Amount</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{transaction.transaction_id}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(transaction.transaction_date).toLocaleString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">${transaction.total_amount}</td>
                                    <td
                                        className={`border border-gray-300 px-4 py-2 ${
                                            transaction.status === "success"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {transaction.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center">
                        No transactions found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Transactions;
