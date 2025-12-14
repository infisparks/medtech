import Link from "next/link";
import { Bell, BookOpen, Calendar, ChevronRight, Clock, CreditCard, FileText, GraduationCap, LayoutDashboard, User, PlayCircle, ClipboardList, CalendarCheck, QrCode } from "lucide-react";

export default function StudentDashboard() {
    return (
        <div className="space-y-6 pb-20">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hi, Alex 👋</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Medical Coding • Batch A-24</p>
                </div>
                <Link href="/studentapp/profile" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                    <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                        AD
                    </div>
                </Link>
            </div>

            {/* Quick Stats / Hero */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-4 text-white shadow-lg shadow-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                    <div className="relative z-10">
                        <p className="text-blue-100 text-xs font-medium mb-1">Attendance</p>
                        <h3 className="text-2xl font-bold">85%</h3>
                        <p className="text-[10px] text-blue-100 mt-2">Good standing</p>
                    </div>
                    <CalendarCheck className="absolute bottom-4 right-4 w-8 h-8 text-white/20" />
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Next Class</p>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">System Design</h3>
                        <p className="text-[10px] text-primary mt-2 flex items-center">
                            <Clock className="w-3 h-3 mr-1" /> 10:30 AM
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Access</h2>
                <div className="grid grid-cols-4 gap-4">
                    <QuickAction href="/studentapp/id-card" icon={<QrCode className="w-6 h-6" />} label="ID Card" color="text-purple-600 bg-purple-50 dark:bg-purple-900/20" />
                    <QuickAction href="/studentapp/fees" icon={<CreditCard className="w-6 h-6" />} label="Fees" color="text-green-600 bg-green-50 dark:bg-green-900/20" />
                    <QuickAction href="/studentapp/attendance" icon={<CalendarCheck className="w-6 h-6" />} label="Attendance" color="text-orange-600 bg-orange-50 dark:bg-orange-900/20" />
                    <QuickAction href="/studentapp/schedule" icon={<Clock className="w-6 h-6" />} label="Timetable" color="text-blue-600 bg-blue-50 dark:bg-blue-900/20" />
                    <QuickAction href="/studentapp/notes" icon={<BookOpen className="w-6 h-6" />} label="Notes" color="text-pink-600 bg-pink-50 dark:bg-pink-900/20" />
                    <QuickAction href="/studentapp/notifications" icon={<Bell className="w-6 h-6" />} label="Alerts" color="text-red-600 bg-red-50 dark:bg-red-900/20" />
                    <QuickAction href="/studentapp/exams" icon={<FileText className="w-6 h-6" />} label="Exams" color="text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" />
                    <QuickAction href="/studentapp/videos" icon={<PlayCircle className="w-6 h-6" />} label="Videos" color="text-pink-600 bg-pink-50 dark:bg-pink-900/20" />
                    <QuickAction href="/studentapp/assignments" icon={<ClipboardList className="w-6 h-6" />} label="Tasks" color="text-orange-600 bg-orange-50 dark:bg-orange-900/20" />
                    <QuickAction href="/studentapp/profile" icon={<User className="w-6 h-6" />} label="Profile" color="text-slate-600 bg-slate-50 dark:bg-slate-800" />
                </div>
            </div>

            {/* Recent Activity / Notices */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Updates</h2>
                    <Link href="/studentapp/notifications" className="text-xs text-primary font-medium">View All</Link>
                </div>
                <div className="space-y-3">
                    <NotificationCard
                        title="Exam Schedule Released"
                        desc="Mid-term examination dates have been announced."
                        time="2 hrs ago"
                        icon={<FileText className="w-4 h-4 text-blue-500" />}
                        bg="bg-blue-50 dark:bg-blue-900/20"
                    />
                    <NotificationCard
                        title="Fee Payment Due"
                        desc="Last date for semester fee submission is tomorrow."
                        time="5 hrs ago"
                        icon={<CreditCard className="w-4 h-4 text-red-500" />}
                        bg="bg-red-50 dark:bg-red-900/20"
                    />
                </div>
            </div>
        </div>
    );
}

function QuickAction({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) {
    return (
        <Link href={href} className="flex flex-col items-center gap-2 group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} shadow-sm group-active:scale-95 transition-transform duration-200`}>
                {icon}
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center leading-tight">{label}</span>
        </Link>
    );
}

function NotificationCard({ title, desc, time, icon, bg }: { title: string, desc: string, time: string, icon: React.ReactNode, bg: string }) {
    return (
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">{title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{desc}</p>
            </div>
            <span className="text-[10px] text-slate-400 flex-shrink-0 whitespace-nowrap">{time}</span>
        </div>
    );
}
