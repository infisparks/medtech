"use client";

import { ArrowLeft, Download, Share2, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function IDCardPage() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        // Simulate download delay
        setTimeout(() => setIsDownloading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Digital ID Card</h1>
            </div>

            <div className="flex flex-col items-center space-y-8">
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <div className="w-full max-w-sm bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative border border-slate-800">
                        {/* Blue Gradient Background */}
                        <div className="h-48 bg-gradient-to-b from-blue-500 to-slate-900 relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        </div>

                        {/* Profile Image */}
                        <div className="relative -mt-20 flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-slate-200 border-4 border-slate-900 flex items-center justify-center text-3xl font-bold text-slate-500 relative z-10">
                                AD
                                <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Student Info */}
                        <div className="text-center mt-4 mb-8 px-6">
                            <h2 className="text-2xl font-bold text-white mb-1">Alex Doe</h2>
                            <p className="text-blue-400 font-medium">Medical Coding Specialist</p>
                        </div>

                        {/* Details Card */}
                        <div className="mx-6 mb-8 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Student ID</p>
                                    <p className="text-white font-mono text-lg">MCS-88</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Batch</p>
                                    <p className="text-white font-medium">Oct-2025</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">DOB</p>
                                    <p className="text-white font-medium">12/05/2003</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Valid Thru</p>
                                    <p className="text-white font-medium">02/2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="h-2 w-20 bg-slate-700 rounded-full mx-auto mb-4"></div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 w-full max-w-sm mt-8">
                        <button
                            onClick={handleDownload}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
                            disabled={isDownloading}
                        >
                            {isDownloading ? (
                                <span className="animate-pulse">Saving...</span>
                            ) : (
                                <>
                                    <Download className="w-5 h-5" /> Download ID
                                </>
                            )}
                        </button>
                        <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 border border-slate-700">
                            <Share2 className="w-5 h-5" /> Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
