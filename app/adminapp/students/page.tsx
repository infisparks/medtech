"use client";

import { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Mail, Phone, Eye, Edit, Trash2, FileText, Award } from "lucide-react";

export default function StudentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Students</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage student enrollments and profiles.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Student
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-[300px]">
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, ID, or email..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                    <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex gap-2">
                    <select className="input-field py-2 px-4 w-auto">
                        <option>All Batches</option>
                        <option>Oct 2025 (A-24)</option>
                        <option>Sep 2025 (B-24)</option>
                    </select>
                    <select className="input-field py-2 px-4 w-auto">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Student Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">ID & Batch</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Course</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Contact</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                                            AD
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Alex Doe</p>
                                            <p className="text-xs text-slate-500">Joined Oct 2025</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-mono text-slate-600 dark:text-slate-400">MCS-88</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 mt-1">
                                        Batch A-24
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                    Medical Coding Specialist
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Mail className="w-3 h-3" /> alex@example.com
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Phone className="w-3 h-3" /> +1 555 000 0000
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-primary" title="Generate Certificate">
                                            <FileText className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-yellow-500" title="Give Achievement">
                                            <Award className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600" title="Edit Details">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-500 hover:text-red-600" title="Delete">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-sm text-slate-500">
                <p>Showing 1-5 of 128 students</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">Previous</button>
                    <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
                </div>
            </div>
        </div>
    );
}
