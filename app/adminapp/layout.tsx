"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    BookOpen,
    CreditCard,
    Settings,
    LogOut,
    Bell,
    Search,
    UserCog,
    FileText,
    Library,
    CheckSquare
} from "lucide-react";

export default function AdminAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white fixed h-full z-20 hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        MedTech Admin
                    </h1>
                    <p className="text-xs text-slate-400 mt-1">Institute Management</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-4 mt-4">Overview</p>
                    <NavLink href="/adminapp" icon={LayoutDashboard} label="Dashboard" active={pathname === "/adminapp"} />

                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-4 mt-6">People</p>
                    <NavLink href="/adminapp/students" icon={Users} label="Students" active={pathname?.includes("/students")} />
                    <NavLink href="/adminapp/teachers" icon={UserCog} label="Teachers & Staff" active={pathname?.includes("/teachers")} />

                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-4 mt-6">Academics</p>
                    <NavLink href="/adminapp/courses" icon={GraduationCap} label="Courses & Batches" active={pathname?.includes("/courses")} />
                    <NavLink href="/adminapp/academics" icon={Library} label="Study Materials" active={pathname === "/adminapp/academics"} />
                    <NavLink href="/adminapp/academics/exams/create" icon={FileText} label="Create Exam" active={pathname?.includes("/exams")} />
                    <NavLink href="/adminapp/attendance" icon={CheckSquare} label="Attendance" active={pathname?.includes("/attendance")} />

                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-4 mt-6">Management</p>
                    <NavLink href="/adminapp/finance" icon={CreditCard} label="Fees & Finance" active={pathname?.includes("/finance")} />
                    <NavLink href="/adminapp/reports" icon={FileText} label="Reports" active={pathname?.includes("/reports")} />
                    <NavLink href="/adminapp/communication" icon={Bell} label="Broadcast" active={pathname?.includes("/communication")} />
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <NavLink href="/adminapp/settings" icon={Settings} label="Settings" active={pathname?.includes("/settings")} />
                    <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors mt-1">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Header */}
                <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
                    <div className="flex items-center gap-4 w-full max-w-md">
                        <div className="relative w-full">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search students, invoices, or courses..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative">
                            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Admin User</p>
                                <p className="text-xs text-slate-500">Super Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}

function NavLink({ href, icon: Icon, label, active }: { href: string, icon: any, label: string, active: boolean }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
        >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
        </Link>
    );
}
