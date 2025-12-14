"use client";

import Link from "next/link";
import { ArrowLeft, Save, Calendar, FileText, Upload } from "lucide-react";

export default function CreateAssignmentPage() {
    return (
        <div className="max-w-3xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/adminapp/academics" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Create New Assignment</h1>
                    <p className="text-slate-500 dark:text-slate-400">Assign tasks and homework to students.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="space-y-6">
                    <div>
                        <label className="label-text">Assignment Title</label>
                        <input type="text" className="input-field" placeholder="e.g. Case Study Analysis" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label-text">Course / Batch</label>
                            <select className="input-field">
                                <option>Select Course</option>
                                <option>Medical Coding - Batch A-24</option>
                                <option>Lab Tech - Batch B-24</option>
                            </select>
                        </div>
                        <div>
                            <label className="label-text">Due Date</label>
                            <div className="relative">
                                <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="date" className="input-field pl-9" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="label-text">Description / Instructions</label>
                        <textarea className="input-field min-h-[150px]" placeholder="Provide detailed instructions for the assignment..."></textarea>
                    </div>

                    <div>
                        <label className="label-text">Attachments (Optional)</label>
                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-500">Click to upload reference files or drag and drop</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                        <button className="btn-primary flex items-center gap-2 px-8">
                            <Save className="w-4 h-4" /> Assign Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
