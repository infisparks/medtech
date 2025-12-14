"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard, Download, CheckCircle, Clock, AlertCircle, FileText } from "lucide-react";

export default function FeesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Fee & Payments</h1>
            </div>

            <div className="space-y-6">
                {/* Total Due Card */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Total Outstanding</p>
                    <h2 className="text-4xl font-bold mb-6">₹ 45,000</h2>

                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                        <CreditCard className="w-4 h-4" /> Pay Now
                    </button>
                </div>

                {/* Transaction History */}
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Transaction History</h3>
                    <div className="space-y-4">
                        <InvoiceCard
                            id="inv-003"
                            title="Course Fee - Installment 2"
                            date="Due Oct 15, 2025"
                            amount="₹ 45,000"
                            status="pending"
                        />
                        <InvoiceCard
                            id="inv-002"
                            title="Lab Material Fee"
                            date="Paid Sep 01, 2025"
                            amount="₹ 5,000"
                            status="paid"
                        />
                        <InvoiceCard
                            id="inv-001"
                            title="Course Fee - Installment 1"
                            date="Paid Aug 15, 2025"
                            amount="₹ 45,000"
                            status="paid"
                        />
                        <InvoiceCard
                            id="inv-000"
                            title="Library Fine"
                            date="Waived Jul 20, 2025"
                            amount="₹ 500"
                            status="waived"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function InvoiceCard({ id, title, date, amount, status }: { id: string, title: string, date: string, amount: string, status: 'paid' | 'pending' | 'waived' }) {
    const statusConfig = {
        paid: { color: "text-green-600 bg-green-50 dark:bg-green-900/20", icon: CheckCircle, label: "Paid" },
        pending: { color: "text-orange-600 bg-orange-50 dark:bg-orange-900/20", icon: Clock, label: "Pending" },
        waived: { color: "text-slate-500 bg-slate-100 dark:bg-slate-800", icon: AlertCircle, label: "Waived" },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <Link href={`/studentapp/fees/invoice/view?id=${id}`} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{title}</h4>
                    <p className="text-xs text-slate-500">{date}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-bold text-slate-900 dark:text-white">{amount}</p>
                <div className="text-[10px] text-primary flex items-center justify-end gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FileText className="w-3 h-3" /> View Invoice
                </div>
            </div>
        </Link>
    );
}
