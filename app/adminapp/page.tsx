import { Users, BookOpen, TrendingUp, MoreVertical } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Page Title */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                <p className="text-slate-500 dark:text-slate-400">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Students</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1,248</h3>
                        <p className="text-xs text-green-500 flex items-center mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" /> +12% from last month
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Classes</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">24</h3>
                        <p className="text-xs text-green-500 flex items-center mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" /> +4 new this week
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">New Inquiries</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">86</h3>
                        <p className="text-xs text-slate-400 mt-1">
                            Pending review
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Students Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Registrations</h3>
                    <button className="text-sm text-primary font-medium hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">Student Name</th>
                                <th className="px-6 py-4 font-medium">Course</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {[
                                { name: "Sarah Johnson", course: "Medical Foundation", date: "Oct 24, 2025", status: "Active", statusColor: "bg-green-100 text-green-700" },
                                { name: "Michael Chen", course: "Advanced Anatomy", date: "Oct 23, 2025", status: "Pending", statusColor: "bg-yellow-100 text-yellow-700" },
                                { name: "Emily Davis", course: "Clinical Practice", date: "Oct 22, 2025", status: "Active", statusColor: "bg-green-100 text-green-700" },
                                { name: "James Wilson", course: "Biomedical Sciences", date: "Oct 21, 2025", status: "Inactive", statusColor: "bg-slate-100 text-slate-700" },
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{student.name}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{student.course}</td>
                                    <td className="px-6 py-4 text-slate-500">{student.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${student.statusColor}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-slate-600">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
