"use client";

import Link from "next/link";
import { ArrowLeft, PlayCircle, Clock, BookOpen } from "lucide-react";

export default function VideosPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Suggested Videos</h1>
            </div>

            <div className="space-y-6">
                {/* Featured Video */}
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                    <div className="aspect-video bg-slate-800 relative flex items-center justify-center group cursor-pointer">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">12:45</span>
                    </div>
                    <div className="p-4">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">Medical Coding</span>
                        <h3 className="text-lg font-bold text-white mb-2">Introduction to ICD-10 Guidelines</h3>
                        <p className="text-slate-400 text-sm line-clamp-2">Learn the fundamental rules and conventions of the ICD-10 coding system in this comprehensive overview.</p>
                    </div>
                </div>

                {/* Video List */}
                <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Latest Uploads</h2>
                    <div className="space-y-4">
                        <VideoCard
                            title="Anatomy of the Heart"
                            subject="Anatomy"
                            duration="08:30"
                            thumbnailColor="bg-red-100 dark:bg-red-900/20"
                        />
                        <VideoCard
                            title="Lab Safety Protocols"
                            subject="Lab Tech"
                            duration="15:20"
                            thumbnailColor="bg-green-100 dark:bg-green-900/20"
                        />
                        <VideoCard
                            title="Medical Terminology: Prefixes"
                            subject="Terminology"
                            duration="10:15"
                            thumbnailColor="bg-purple-100 dark:bg-purple-900/20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function VideoCard({ title, subject, duration, thumbnailColor }: { title: string, subject: string, duration: string, thumbnailColor: string }) {
    return (
        <div className="flex gap-4 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className={`w-24 h-16 rounded-lg ${thumbnailColor} flex-shrink-0 flex items-center justify-center relative`}>
                <PlayCircle className="w-8 h-8 text-slate-900/50 dark:text-white/50" />
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">{duration}</span>
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{subject}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2 leading-tight">{title}</h4>
            </div>
        </div>
    );
}
