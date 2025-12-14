import Link from "next/link";
import { ArrowLeft, Check, X, Clock } from "lucide-react";

export default function AttendancePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Attendance Record</h1>
            </div>

            <div className="space-y-6">
                {/* Stats Overview */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 rounded-full border-8 border-primary/20 border-t-primary flex items-center justify-center mb-2">
                            <span className="text-xl font-bold text-primary">85%</span>
                        </div>
                        <p className="text-xs font-medium text-slate-500">Overall Attendance</p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl flex items-center justify-between">
                            <span className="text-xs font-medium text-green-700 dark:text-green-400">Present</span>
                            <span className="text-lg font-bold text-green-700 dark:text-green-400">42</span>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl flex items-center justify-between">
                            <span className="text-xs font-medium text-red-700 dark:text-red-400">Absent</span>
                            <span className="text-lg font-bold text-red-700 dark:text-red-400">5</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Log */}
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recent Classes</h3>
                    <div className="space-y-3">
                        {[
                            { subject: "Anatomy", date: "Today, 10:00 AM", status: "present" },
                            { subject: "Physiology", date: "Yesterday, 02:00 PM", status: "present" },
                            { subject: "Biochemistry", date: "Oct 22, 09:00 AM", status: "absent" },
                            { subject: "Pathology", date: "Oct 21, 11:00 AM", status: "late" },
                            { subject: "Microbiology", date: "Oct 20, 01:00 PM", status: "present" },
                        ].map((record, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{record.subject}</h4>
                                    <p className="text-xs text-slate-500">{record.date}</p>
                                </div>
                                <StatusBadge status={record.status as any} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: 'present' | 'absent' | 'late' }) {
    const config = {
        present: { color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", icon: Check, label: "Present" },
        absent: { color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", icon: X, label: "Absent" },
        late: { color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400", icon: Clock, label: "Late" },
    };

    const { color, icon: Icon, label } = config[status];

    return (
        <div className={`px-3 py-1 rounded-full flex items-center gap-1.5 ${color}`}>
            <Icon className="w-3 h-3" />
            <span className="text-xs font-medium">{label}</span>
        </div>
    );
}
