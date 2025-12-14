"use client";

import { Send, Bell, Users, MessageSquare, AlertTriangle } from "lucide-react";

export default function CommunicationPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Broadcast & Notifications</h1>
                    <p className="text-slate-500 dark:text-slate-400">Send announcements to students and staff.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Compose Message */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <Send className="w-5 h-5 text-primary" /> Compose Notification
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="label-text">Title</label>
                                <input type="text" className="input-field" placeholder="e.g. Exam Schedule Update" />
                            </div>

                            <div>
                                <label className="label-text">Recipients</label>
                                <select className="input-field">
                                    <option>All Students</option>
                                    <option>All Teachers</option>
                                    <option>Specific Batch: Medical Coding (A-24)</option>
                                    <option>Specific Batch: Lab Tech (B-24)</option>
                                </select>
                            </div>

                            <div>
                                <label className="label-text">Message</label>
                                <textarea className="input-field min-h-[150px]" placeholder="Type your message here..."></textarea>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-primary focus:ring-primary" defaultChecked />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Send Push Notification</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Send Email</span>
                                </label>
                            </div>

                            <div className="pt-4">
                                <button className="btn-primary w-full flex items-center justify-center gap-2">
                                    <Send className="w-4 h-4" /> Send Broadcast
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent History */}
                <div className="space-y-6">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent History</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Holiday Announcement", date: "2 hours ago", type: "All Students", color: "bg-blue-500" },
                            { title: "Exam Results Released", date: "Yesterday", type: "Batch A-24", color: "bg-green-500" },
                            { title: "Fee Payment Reminder", date: "2 days ago", type: "Pending Fees", color: "bg-orange-500" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <div className={`w-2 h-2 mt-2 rounded-full ${item.color}`}></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                                        <p className="text-xs text-slate-500 mt-1">{item.type} • {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">System Status</h4>
                                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Push notification service is operational.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
