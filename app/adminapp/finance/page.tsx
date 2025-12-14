"use client";

import { Download, TrendingUp, TrendingDown, DollarSign, CreditCard, AlertCircle, CheckCircle, Search, Filter } from "lucide-react";

export default function FinancePage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Fees & Finance</h1>
                    <p className="text-slate-500 dark:text-slate-400">Track revenue, pending payments, and expenses.</p>
                </div>
                <button className="btn-secondary flex items-center gap-2">
                    <Download className="w-4 h-4" /> Export Report
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12.5%</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">₹ 12.5L</h3>
                    <p className="text-slate-500 text-sm">Total Revenue (This Month)</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-full">15 Students</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">₹ 4.2L</h3>
                    <p className="text-slate-500 text-sm">Pending Fees</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-slate-500">Last 30 Days</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">145</h3>
                    <p className="text-slate-500 text-sm">Successful Transactions</p>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Transactions</h3>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                            />
                        </div>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
                            <Filter className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Invoice ID</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Student</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Description</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Date</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Amount</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">INV-2025-00{i}</td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Alex Doe</td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Course Fee - Installment 1</td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Oct 15, 2025</td>
                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">₹ 45,000</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-bold">
                                        <CheckCircle className="w-3 h-3" /> Paid
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
