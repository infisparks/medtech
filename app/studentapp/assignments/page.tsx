"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Calendar, Clock, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";

export default function AssignmentsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Assignments</h1>
            </div>

            <div className="space-y-6">
                {/* Pending */}
                <div>
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Pending</h2>
                    <div className="space-y-4">
                        <AssignmentCard
                            title="ICD-10 Case Studies"
                            subject="Medical Coding"
                            dueDate="Due Tomorrow"
                            status="pending"
                        />
                        <AssignmentCard
                            title="Lab Report: Blood Analysis"
                            subject="Lab Tech"
                            dueDate="Due Oct 20"
                            status="pending"
                        />
                    </div>
                </div>

                {/* Submitted */}
                <div>
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Submitted</h2>
                    <div className="space-y-4">
                        <AssignmentCard
                            title="Anatomy Diagrams"
                            subject="Anatomy"
                            dueDate="Submitted Oct 10"
                            status="submitted"
                            grade="A"
                        />
                        <AssignmentCard
                            title="Medical Terminology Essay"
                            subject="Terminology"
                            dueDate="Submitted Oct 05"
                            status="submitted"
                            grade="B+"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AssignmentCard({ title, subject, dueDate, status, grade }: { title: string, subject: string, dueDate: string, status: 'pending' | 'submitted', grade?: string }) {
    const isPending = status === 'pending';

    return (
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
            {isPending && <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>}

            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mb-2 inline-block">
                        {subject}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
                </div>
                {grade && (
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-700 dark:text-green-400 font-bold border border-green-200 dark:border-green-800">
                        {grade}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className={`flex items-center gap-1 text-xs font-medium ${isPending ? 'text-orange-600' : 'text-slate-500'}`}>
                    {isPending ? <Clock className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                    {dueDate}
                </div>

                {isPending && (
                    <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                        Submit Now <ChevronRight className="w-3 h-3" />
                    </button>
                )}
            </div>
        </div>
    );
}
