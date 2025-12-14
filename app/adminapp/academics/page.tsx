"use client";

import { FileText, PlayCircle, BookOpen, Plus, Upload, ClipboardList, MoreVertical } from "lucide-react";

export default function AcademicsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Study Materials & Academics</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage exams, assignments, and learning resources.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Exams Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <FileText className="w-5 h-5 text-indigo-500" /> Exams
                        </h2>
                        <button className="text-sm font-medium text-primary hover:underline">View All</button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">Active & Upcoming</span>
                            <button className="btn-primary py-1.5 px-3 text-xs flex items-center gap-1">
                                <Plus className="w-3 h-3" /> Create Exam
                            </button>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">Medical Coding Mid-Term</h4>
                                        <p className="text-xs text-slate-500 mt-1">Batch A-24 • 40 Questions • 60 Mins</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">Active</span>
                                        <button className="text-slate-400 hover:text-slate-600">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <ClipboardList className="w-5 h-5 text-orange-500" /> Assignments
                        </h2>
                        <button className="text-sm font-medium text-primary hover:underline">View All</button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">Recent Tasks</span>
                            <button className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1">
                                <Plus className="w-3 h-3" /> New Assignment
                            </button>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">ICD-10 Case Study Analysis</h4>
                                        <p className="text-xs text-slate-500 mt-1">Due Oct 25 • 45 Submissions</p>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Resources Section */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Upload className="w-5 h-5 text-blue-500" /> Uploads
                    </h2>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mx-auto flex items-center justify-center mb-4">
                            <Upload className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Upload New Content</h3>
                        <p className="text-sm text-slate-500 mb-6">Drag and drop video lectures, PDF notes, or other study materials here.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="btn-primary py-2 text-xs flex items-center justify-center gap-2">
                                <PlayCircle className="w-3 h-3" /> Video
                            </button>
                            <button className="btn-secondary py-2 text-xs flex items-center justify-center gap-2">
                                <BookOpen className="w-3 h-3" /> Document
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800 font-semibold text-sm">
                            Recent Uploads
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            <div className="p-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                                    <PlayCircle className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate text-slate-900 dark:text-white">Anatomy Lecture 4.mp4</p>
                                    <p className="text-xs text-slate-500">Video • 120 MB</p>
                                </div>
                            </div>
                            <div className="p-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate text-slate-900 dark:text-white">Lab Safety Manual.pdf</p>
                                    <p className="text-xs text-slate-500">PDF • 2.4 MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
