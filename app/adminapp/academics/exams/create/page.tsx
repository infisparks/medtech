"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Save, Trash2, GripVertical, CheckCircle, Clock, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

export default function CreateExamPage() {
    const [questions, setQuestions] = useState([
        { id: 1, type: 'mcq', text: '', options: ['', '', '', ''], correct: 0 }
    ]);

    const addQuestion = () => {
        setQuestions([...questions, { id: questions.length + 1, type: 'mcq', text: '', options: ['', '', '', ''], correct: 0 }]);
    };

    return (
        <div className="max-w-5xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/adminapp/academics" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Create New Exam</h1>
                    <p className="text-slate-500 dark:text-slate-400">Design a comprehensive assessment for your students.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Exam Configuration */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" /> Exam Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="label-text">Exam Title</label>
                                <input type="text" className="input-field" placeholder="e.g. Anatomy Mid-Term" />
                            </div>

                            <div>
                                <label className="label-text">Course / Batch</label>
                                <select className="input-field">
                                    <option>Select Course</option>
                                    <option>Medical Coding - Batch A-24</option>
                                    <option>Lab Tech - Batch B-24</option>
                                </select>
                                <p className="text-xs text-slate-500 mt-1">Only students in this batch will see this exam.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label-text">Duration (Mins)</label>
                                    <div className="relative">
                                        <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input type="number" className="input-field pl-9" placeholder="60" />
                                    </div>
                                </div>
                                <div>
                                    <label className="label-text">Total Marks</label>
                                    <input type="number" className="input-field" placeholder="100" />
                                </div>
                            </div>

                            <div>
                                <label className="label-text">Scheduled Date</label>
                                <div className="relative">
                                    <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="datetime-local" className="input-field pl-9" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <button className="btn-primary w-full flex items-center justify-center gap-2">
                                    <Save className="w-4 h-4" /> Publish Exam
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Question Builder */}
                <div className="lg:col-span-2 space-y-6">
                    {questions.map((q, idx) => (
                        <div key={q.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <button className="cursor-move text-slate-400 hover:text-slate-600">
                                        <GripVertical className="w-5 h-5" />
                                    </button>
                                    <span className="font-bold text-slate-500">Q{idx + 1}</span>
                                    <select className="text-sm border-none bg-slate-50 dark:bg-slate-800 rounded-lg px-2 py-1 font-medium text-slate-700 dark:text-slate-300 focus:ring-0">
                                        <option value="mcq">Multiple Choice</option>
                                        <option value="text">Short Answer</option>
                                        <option value="boolean">True / False</option>
                                    </select>
                                </div>
                                <button className="text-slate-400 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    className="input-field text-lg font-medium border-none px-0 bg-transparent focus:ring-0 placeholder:text-slate-300"
                                    placeholder="Type your question here..."
                                />

                                {/* Options for MCQ */}
                                <div className="space-y-3 pl-4 border-l-2 border-slate-100 dark:border-slate-800">
                                    {q.options.map((opt, optIdx) => (
                                        <div key={optIdx} className="flex items-center gap-3">
                                            <input type="radio" name={`correct-${q.id}`} className="w-4 h-4 text-primary focus:ring-primary" />
                                            <input
                                                type="text"
                                                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary"
                                                placeholder={`Option ${optIdx + 1}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addQuestion}
                        className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 font-medium"
                    >
                        <Plus className="w-5 h-5" /> Add New Question
                    </button>
                </div>
            </div>
        </div>
    );
}
