"use client";

import { useState } from "react";
import { Calendar, CheckCircle, XCircle, Search, Filter, Save, Users } from "lucide-react";

export default function AttendancePage() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Attendance Management</h1>
                    <p className="text-slate-500 dark:text-slate-400">Mark and review student attendance.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0"
                        />
                    </div>
                    <button className="btn-primary flex items-center gap-2">
                        <Save className="w-4 h-4" /> Save Attendance
                    </button>
                </div>
            </div>

            {/* Batch Selector */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-slate-400" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">Select Batch:</span>
                </div>
                <select className="input-field w-auto min-w-[200px]">
                    <option>Medical Coding (A-24)</option>
                    <option>Lab Technician (B-24)</option>
                </select>
                <div className="flex-1"></div>
                <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-slate-600 dark:text-slate-400">Present: <b>42</b></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="text-slate-600 dark:text-slate-400">Absent: <b>3</b></span>
                    </div>
                </div>
            </div>

            {/* Attendance List */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 w-20">Roll No</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Student Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-center w-40">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Remarks</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-slate-500">#{100 + i}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                            ST
                                        </div>
                                        <span className="font-medium text-slate-900 dark:text-white">Student Name {i}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 w-fit mx-auto">
                                        <button className="p-1.5 rounded bg-green-500 text-white shadow-sm">
                                            <CheckCircle className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                            <XCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <input type="text" placeholder="Add remark..." className="bg-transparent border-none text-sm focus:ring-0 placeholder:text-slate-300 w-full" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
