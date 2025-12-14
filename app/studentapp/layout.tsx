"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BookOpen, GraduationCap, LayoutDashboard, Smartphone, Home, Calendar, User, Bell } from "lucide-react";

export default function StudentAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isExamPage = pathname?.includes("/take-exam");

    return (
        <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 ${isExamPage ? '' : 'pb-20'}`}>
            {/* Mobile Header - Hide on Exam Page */}
            {!isExamPage && (
                <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 sticky top-0 z-20 flex justify-between items-center">
                    <div className="font-bold text-lg text-primary">MedTech Student</div>
                    <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative">
                        <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                    </button>
                </header>
            )}

            <main className={isExamPage ? "h-full" : "p-4"}>
                {children}
            </main>

            {/* Bottom Navigation - Hide on Exam Page */}
            {!isExamPage && (
                <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-30 pb-safe">
                    <div className="flex justify-around items-center h-16">
                        <NavLink href="/studentapp" icon={Home} label="Home" active={pathname === "/studentapp"} />
                        <NavLink href="/studentapp/notes" icon={BookOpen} label="Notes" active={pathname?.includes("/notes")} />
                        <NavLink href="/studentapp/schedule" icon={Calendar} label="Schedule" active={pathname?.includes("/schedule")} />
                        <NavLink href="/studentapp/profile" icon={User} label="Profile" active={pathname?.includes("/profile")} />
                    </div>
                </nav>
            )}
        </div>
    );
}

function NavLink({ href, icon: Icon, label, active }: { href: string, icon: any, label: string, active: boolean }) {
    return (
        <Link href={href} className={`flex flex-col items-center justify-center w-full h-full transition-colors ${active ? 'text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}>
            <Icon className={`w-6 h-6 mb-1 ${active ? 'fill-current' : ''}`} />
            <span className="text-[10px] font-medium">{label}</span>
        </Link>
    );
}
