"use client";

import Link from "next/link";
import { ArrowLeft, Download, Share2, Printer, CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function InvoiceContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || 'INV-001';

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp/fees" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Invoice Details</h1>
            </div>

            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden">
                {/* Invoice Header */}
                <div className="bg-slate-900 text-white p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">INVOICE</h2>
                            <p className="text-slate-400 text-sm">#{id.toUpperCase()}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-primary">MedTechMakeIt</div>
                            <p className="text-xs text-slate-400 mt-1">Institute of Medical Sciences</p>
                        </div>
                    </div>
                </div>

                {/* Invoice Body */}
                <div className="p-8 space-y-8">
                    {/* Status & Date */}
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-6">
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Date Issued</p>
                            <p className="font-semibold text-slate-900 dark:text-white">Oct 15, 2025</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</p>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">
                                <CheckCircle className="w-3 h-3" /> Paid
                            </span>
                        </div>
                    </div>

                    {/* Bill To */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Billed To</p>
                            <h3 className="font-bold text-slate-900 dark:text-white">Alex Doe</h3>
                            <p className="text-sm text-slate-500">Student ID: MCS-88</p>
                            <p className="text-sm text-slate-500">Medical Coding Specialist</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Institute Info</p>
                            <p className="text-sm text-slate-500 flex items-center justify-end gap-1"><MapPin className="w-3 h-3" /> 123 Campus Dr, City</p>
                            <p className="text-sm text-slate-500 flex items-center justify-end gap-1"><Mail className="w-3 h-3" /> finance@medtech.edu</p>
                            <p className="text-sm text-slate-500 flex items-center justify-end gap-1"><Phone className="w-3 h-3" /> +1 (555) 000-0000</p>
                        </div>
                    </div>

                    {/* Line Items */}
                    <div>
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500">
                                <tr>
                                    <th className="px-4 py-3 text-left rounded-l-lg">Description</th>
                                    <th className="px-4 py-3 text-right rounded-r-lg">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="px-4 py-4 text-slate-900 dark:text-white font-medium">Course Fee - Installment 1</td>
                                    <td className="px-4 py-4 text-right text-slate-600 dark:text-slate-300">₹ 45,000.00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 text-slate-900 dark:text-white font-medium">Registration Fee</td>
                                    <td className="px-4 py-4 text-right text-slate-600 dark:text-slate-300">₹ 2,000.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white text-right">Total</td>
                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white text-right text-lg">₹ 47,000.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Actions */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 flex gap-4">
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" /> Download PDF
                    </button>
                    <button className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <Printer className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function InvoicePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Invoice...</div>}>
            <InvoiceContent />
        </Suspense>
    );
}
