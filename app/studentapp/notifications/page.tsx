import Link from "next/link";
import { ArrowLeft, Bell, Calendar, CreditCard, Info } from "lucide-react";

export default function NotificationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Notifications</h1>
            </div>

            <div className="space-y-6">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <FilterChip label="All" active />
                    <FilterChip label="Academic" />
                    <FilterChip label="Fees" />
                    <FilterChip label="System" />
                </div>

                <div className="space-y-4">
                    <NotificationGroup title="Today">
                        <NotificationItem
                            title="Exam Schedule Released"
                            desc="Mid-term examination dates have been announced. Check the schedule tab."
                            time="2 hrs ago"
                            type="academic"
                        />
                        <NotificationItem
                            title="Fee Payment Reminder"
                            desc="Your semester fee is due tomorrow. Please pay to avoid late charges."
                            time="5 hrs ago"
                            type="fee"
                        />
                    </NotificationGroup>

                    <NotificationGroup title="Yesterday">
                        <NotificationItem
                            title="Class Cancelled"
                            desc="Dr. Smith's Anatomy class at 10 AM is cancelled."
                            time="Yesterday"
                            type="info"
                        />
                    </NotificationGroup>

                    <NotificationGroup title="Earlier">
                        <NotificationItem
                            title="New Assignment Uploaded"
                            desc="Physiology assignment 3 is now available."
                            time="Oct 20"
                            type="academic"
                        />
                        <NotificationItem
                            title="System Maintenance"
                            desc="App will be down for maintenance on Sunday 2 AM - 4 AM."
                            time="Oct 18"
                            type="system"
                        />
                    </NotificationGroup>
                </div>
            </div>
        </div>
    );
}

function FilterChip({ label, active }: { label: string, active?: boolean }) {
    return (
        <button className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${active
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
            }`}>
            {label}
        </button>
    );
}

function NotificationGroup({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 ml-1">{title}</h3>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
}

function NotificationItem({ title, desc, time, type }: { title: string, desc: string, time: string, type: 'academic' | 'fee' | 'info' | 'system' }) {
    const config = {
        academic: { icon: Calendar, color: "bg-blue-100 text-blue-600" },
        fee: { icon: CreditCard, color: "bg-red-100 text-red-600" },
        info: { icon: Info, color: "bg-orange-100 text-orange-600" },
        system: { icon: Bell, color: "bg-slate-100 text-slate-600" },
    };

    const { icon: Icon, color } = config[type];

    return (
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-4">
            <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{title}</h4>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{time}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
