"use client";

import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, Clock } from "lucide-react";
import { useState } from "react";

export default function TimetablePage() {
    const [slots, setSlots] = useState([
        { id: 1, day: 'Monday', time: '09:00 AM - 10:30 AM', subject: 'Anatomy', teacher: 'Dr. Smith' },
        { id: 2, day: 'Monday', time: '11:00 AM - 12:30 PM', subject: 'Medical Terminology', teacher: 'Prof. Johnson' },
    ]);

    const addSlot = () => {
        setSlots([...slots, { id: Date.now(), day: 'Monday', time: '', subject: '', teacher: '' }]);
    };

    const removeSlot = (id: number) => {
        setSlots(slots.filter(s => s.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/adminapp/courses" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Update Timetable</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage class schedules for Medical Coding (Batch A-24).</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Weekly Schedule</h3>
                    <button onClick={addSlot} className="btn-secondary text-xs flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Add Slot
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    {slots.map((slot) => (
                        <div key={slot.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                            <div className="md:col-span-3">
                                <label className="text-xs font-semibold text-slate-500 mb-1 block">Day</label>
                                <select className="input-field py-2 text-sm" defaultValue={slot.day}>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                </select>
                            </div>
                            <div className="md:col-span-3">
                                <label className="text-xs font-semibold text-slate-500 mb-1 block">Time</label>
                                <input type="text" className="input-field py-2 text-sm" defaultValue={slot.time} placeholder="e.g. 09:00 AM" />
                            </div>
                            <div className="md:col-span-3">
                                <label className="text-xs font-semibold text-slate-500 mb-1 block">Subject</label>
                                <input type="text" className="input-field py-2 text-sm" defaultValue={slot.subject} placeholder="Subject Name" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-xs font-semibold text-slate-500 mb-1 block">Teacher</label>
                                <input type="text" className="input-field py-2 text-sm" defaultValue={slot.teacher} placeholder="Teacher Name" />
                            </div>
                            <div className="md:col-span-1 flex justify-end pb-1">
                                <button onClick={() => removeSlot(slot.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                    <button className="btn-primary flex items-center gap-2 px-6">
                        <Save className="w-4 h-4" /> Save Timetable
                    </button>
                </div>
            </div>
        </div>
    );
}
