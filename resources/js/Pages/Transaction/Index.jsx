import React from "react";
import { usePage, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Transactions = () => {
    const { transactions } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                        Financial <span className="italic text-[#FF3300]">Ledger</span>
                    </h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Audit Your Elite Acquisitions</p>
                </div>
            }
        >
            <Head title="Financial Ledger" />

            <div className="py-20 min-h-screen bg-[#050505]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    
                    <div className="relative overflow-hidden rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        
                        {transactions.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="px-8 py-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Transaction Protocol</th>
                                            <th className="px-8 py-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Temporal Stamp</th>
                                            <th className="px-8 py-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Value (BDT)</th>
                                            <th className="px-8 py-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/[0.02]">
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id} className="group hover:bg-white/[0.02] transition-colors">
                                                <td className="px-8 py-8">
                                                    <span className="text-white font-mono text-xs font-bold tracking-tight uppercase group-hover:text-[#FF3300] transition-colors">
                                                        {transaction.transaction_id}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-8">
                                                    <span className="text-gray-400 text-xs font-medium">
                                                        {new Date(transaction.transaction_date).toLocaleString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-8">
                                                    <span className="text-white font-black font-['Playfair_Display'] text-lg">
                                                        ৳{(transaction.total_amount).toLocaleString()}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-8">
                                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                                        transaction.status === "success"
                                                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                                                    }`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                                                            transaction.status === "success" ? "bg-green-500 shadow-[0_0_8px_#22C55E]" : "bg-red-500"
                                                        }`}></span>
                                                        {transaction.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-40 text-center">
                                <div className="inline-block p-6 rounded-[2rem] bg-white/5 border border-white/5 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No Protocols Initiated</h3>
                                <p className="text-gray-500 text-sm max-w-xs mx-auto">Your visual acquisition journey is awaiting its first entry.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Transactions;
