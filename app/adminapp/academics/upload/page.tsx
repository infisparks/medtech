"use client";

import Link from "next/link";
import { ArrowLeft, Upload, FileText, Video, BookOpen, Save } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UploadContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type') || 'document';

    const getTitle = () => {
        switch (type) {
            case 'video': return 'Upload Video Lecture';
            case 'notes': return 'Upload Study Notes';
            default: return 'Upload Document';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'video': return Video;
            case 'notes': return BookOpen;
            default: return FileText;
        }
    };

    const Icon = getIcon();

    return (
        <div className="max-w-3xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/adminapp/courses" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{getTitle()}</h1>
                    <p className="text-slate-500 dark:text-slate-400">Add new learning materials to the course.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="space-y-6">
                    <div className="flex justify-center mb-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${type === 'video' ? 'bg-red-100 text-red-600' :
                                type === 'notes' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                            }`}>
                            <Icon className="w-8 h-8" />
                        </div>
                    </div>

                    <div>
                        <label className="label-text">Title</label>
                        <input type="text" className="input-field" placeholder={`e.g. ${type === 'video' ? 'Introduction to Anatomy' : 'Chapter 1 Notes'}`} />
                    </div>

                    <div>
                        <label className="label-text">Course / Batch</label>
                        <select className="input-field">
                            <option>Select Course</option>
                            <option>Medical Coding - Batch A-24</option>
                            <option>Lab Tech - Batch B-24</option>
                        </select>
                    </div>

                    <div>
                        <label className="label-text">Description</label>
                        <textarea className="input-field min-h-[100px]" placeholder="Brief description of the content..."></textarea>
                    </div>

                    <div>
                        <label className="label-text">File Upload</label>
                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-10 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                            <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <p className="font-medium text-slate-900 dark:text-white">Click to upload or drag and drop</p>
                            <p className="text-xs text-slate-500 mt-1">
                                {type === 'video' ? 'MP4, WebM up to 500MB' : 'PDF, DOCX up to 50MB'}
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                        <button className="btn-primary flex items-center gap-2 px-8">
                            <Save className="w-4 h-4" /> Upload Content
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function UploadPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <UploadContent />
        </Suspense>
    );
}
