"use client";

import Link from "next/link";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState("Mon");

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    const schedule = {
        Mon: [
            { time: "09:00 AM", subject: "Anatomy", room: "Hall A", type: "Lecture", color: "bg-blue-100 text-blue-700 border-blue-200" },
            { time: "11:00 AM", subject: "Physiology", room: "Lab 3", type: "Practical", color: "bg-purple-100 text-purple-700 border-purple-200" },
            { time: "02:00 PM", subject: "Biochemistry", room: "Hall B", type: "Lecture", color: "bg-orange-100 text-orange-700 border-orange-200" },
        ],
        Tue: [
            { time: "10:00 AM", subject: "Pathology", room: "Hall C", type: "Lecture", color: "bg-green-100 text-green-700 border-green-200" },
            { time: "01:00 PM", subject: "Microbiology", room: "Lab 1", type: "Practical", color: "bg-pink-100 text-pink-700 border-pink-200" },
        ],
        // Default empty for others for demo
        Wed: [], Thu: [], Fri: []
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Class Schedule</h1>
            </div>

            {/* Day Selector */}
            <div className="flex justify-between bg-white dark:bg-slate-900 p-2 rounded-2xl mb-8 shadow-sm">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setActiveDay(day)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-all ${activeDay === day
                                ? "bg-primary text-white shadow-lg shadow-primary/30"
                                : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="space-y-6 relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

                {(schedule[activeDay as keyof typeof schedule] || []).length > 0 ? (
                    (schedule[activeDay as keyof typeof schedule] as any[]).map((slot, i) => (
                        <div key={i} className="relative pl-8">
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-slate-950 z-10"></div>

                            <div className={`p-4 rounded-2xl border ${slot.color} dark:bg-opacity-10 dark:border-opacity-20`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold opacity-80 px-2 py-1 rounded bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                                        {slot.type}
                                    </span>
                                    <div className="flex items-center text-xs font-medium opacity-80">
                                        <Clock className="w-3 h-3 mr-1" /> {slot.time}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mb-1">{slot.subject}</h3>
                                <div className="flex items-center text-sm opacity-80">
                                    <MapPin className="w-3 h-3 mr-1" /> {slot.room}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-slate-400">
                        <p>No classes scheduled for this day.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
