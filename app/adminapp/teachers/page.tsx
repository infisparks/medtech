"use client";

import { Plus, Search, Filter, Mail, Phone, Eye, Edit, Trash2, GraduationCap } from "lucide-react";

export default function TeachersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Teachers & Staff</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage faculty members and administrative staff.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Teacher
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-[300px]">
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search staff..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <select className="input-field py-2 px-4 w-auto">
                        <option>All Departments</option>
                        <option>Medical Coding</option>
                        <option>Lab Technology</option>
                        <option>Administration</option>
                    </select>
                </div>
            </div>

            {/* Grid View for Teachers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition-shadow group relative">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-600">
                                <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-600">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl font-bold text-primary">
                                DR
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Dr. Sarah Smith</h3>
                                <p className="text-sm text-primary font-medium">Senior Instructor</p>
                                <p className="text-xs text-slate-500">Medical Coding Dept.</p>
                            </div>
                        </div>

                        <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <GraduationCap className="w-4 h-4 text-slate-400" />
                                <span>PhD in Health Informatics</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <Mail className="w-4 h-4 text-slate-400" />
                                <span>sarah.smith@medtech.edu</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <Phone className="w-4 h-4 text-slate-400" />
                                <span>+1 (555) 987-6543</span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">Full Time</span>
                            <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-xs font-medium text-green-600">Active</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
