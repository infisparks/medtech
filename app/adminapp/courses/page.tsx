"use client";

import { Plus, Users, Clock, Calendar, MoreVertical, BookOpen, FileText, Video, ClipboardList, Bell, File, Table } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function CoursesPage() {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenuId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = (id: number) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    return (
        <div className="space-y-6 pb-20" onClick={() => setOpenMenuId(null)}>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Courses & Batches</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage certification programs and upcoming batches.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Course
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Course Cards */}
                {[
                    { id: 1, title: "Medical Coding Specialist", duration: "4 Months", students: 120, batches: 3, color: "bg-blue-500" },
                    { id: 2, title: "Medical Lab Technician", duration: "6 Months", students: 85, batches: 2, color: "bg-green-500" },
                    { id: 3, title: "X-Ray Technician", duration: "6 Months", students: 45, batches: 1, color: "bg-purple-500" },
                    { id: 4, title: "Hospital Administration", duration: "6 Months", students: 60, batches: 2, color: "bg-orange-500" },
                ].map((course) => (
                    <div key={course.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-visible hover:shadow-md transition-shadow relative">
                        <div className={`h-2 w-full ${course.color} rounded-t-xl`}></div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4 relative">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg ${course.color} bg-opacity-10 flex items-center justify-center`}>
                                        <BookOpen className={`w-5 h-5 ${course.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{course.title}</h3>
                                        <p className="text-xs text-slate-500">Certification Program</p>
                                    </div>
                                </div>

                                <div className="relative" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        onClick={() => toggleMenu(course.id)}
                                        className={`p-2 rounded-lg transition-colors ${openMenuId === course.id ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                                    >
                                        <MoreVertical className="w-5 h-5" />
                                    </button>

                                    {openMenuId === course.id && (
                                        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                            <div className="p-1">
                                                <Link href="/adminapp/academics/exams/create" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <FileText className="w-4 h-4 text-indigo-500" /> Add Exam
                                                </Link>
                                                <Link href="/adminapp/academics/upload?type=pdf" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <File className="w-4 h-4 text-red-500" /> Add PDF
                                                </Link>
                                                <Link href="/adminapp/academics/upload?type=video" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <Video className="w-4 h-4 text-blue-500" /> Add Video
                                                </Link>
                                                <Link href="/adminapp/academics/assignments/create" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <ClipboardList className="w-4 h-4 text-orange-500" /> Add Task
                                                </Link>
                                                <Link href="/adminapp/communication" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <Bell className="w-4 h-4 text-yellow-500" /> Add Alert
                                                </Link>
                                                <Link href="/adminapp/academics/upload?type=notes" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <BookOpen className="w-4 h-4 text-green-500" /> Add Notes
                                                </Link>
                                                <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                                                <Link href="/adminapp/courses/timetable" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <Table className="w-4 h-4 text-purple-500" /> Update Timetable
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                                    <Clock className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                                    <p className="text-xs text-slate-500">Duration</p>
                                    <p className="font-bold text-slate-900 dark:text-white">{course.duration}</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                                    <Users className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                                    <p className="text-xs text-slate-500">Students</p>
                                    <p className="font-bold text-slate-900 dark:text-white">{course.students}</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                                    <Calendar className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                                    <p className="text-xs text-slate-500">Batches</p>
                                    <p className="font-bold text-slate-900 dark:text-white">{course.batches}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Active Batches</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            <span className="font-medium text-sm text-slate-700 dark:text-slate-300">Oct 2025 (A-24)</span>
                                        </div>
                                        <span className="text-xs text-slate-400">42 Students</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                            <span className="font-medium text-sm text-slate-700 dark:text-slate-300">Sep 2025 (B-24)</span>
                                        </div>
                                        <span className="text-xs text-slate-400">38 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
