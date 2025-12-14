"use client";

import Link from "next/link";
import {
    ArrowLeft,
    User,
    Mail,
    Phone,
    MapPin,
    Shield,
    Bell,
    LogOut,
    ChevronRight,
    Moon,
    Award,
    BookOpen,
    GraduationCap,
    Camera,
    Edit3
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<'personal' | 'academic' | 'settings'>('personal');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            {/* Header / Cover */}
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4">
                    <Link href="/studentapp" className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Profile Card */}
            <div className="px-4 -mt-20 relative z-10">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col items-center text-center">
                    <div className="relative">
                        <div className="w-28 h-28 rounded-full border-4 border-white dark:border-slate-900 shadow-lg overflow-hidden bg-slate-200 mb-4">
                            <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
                                AD
                            </div>
                        </div>
                        <button className="absolute bottom-4 right-0 p-2 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-colors">
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Alex Doe</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Medical Coding Specialist • Batch A-24</p>

                    <div className="flex gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide">
                            Active
                        </span>
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
                            Grade A
                        </span>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 w-full mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold text-slate-900 dark:text-white">92%</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Attendance</span>
                        </div>
                        <div className="flex flex-col items-center border-l border-r border-slate-100 dark:border-slate-800">
                            <span className="text-lg font-bold text-slate-900 dark:text-white">4 Mo</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Duration</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold text-slate-900 dark:text-white">2</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Modules</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="px-4 mt-6">
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    <TabButton active={activeTab === 'personal'} onClick={() => setActiveTab('personal')} label="Personal" />
                    <TabButton active={activeTab === 'academic'} onClick={() => setActiveTab('academic')} label="Course Info" />
                    <TabButton active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} label="Settings" />
                </div>
            </div>

            {/* Content */}
            <div className="px-4 mt-6">
                {activeTab === 'personal' && (
                    <div className="space-y-4 animate-fade-in">
                        <SectionCard title="Contact Information">
                            <InfoRow icon={<Mail className="w-4 h-4" />} label="Email" value="alex.doe@student.edu" />
                            <InfoRow icon={<Phone className="w-4 h-4" />} label="Phone" value="+1 (555) 123-4567" />
                            <InfoRow icon={<MapPin className="w-4 h-4" />} label="Address" value="123 Campus Dr, City, State" />
                        </SectionCard>

                        <SectionCard title="Basic Details">
                            <InfoRow icon={<User className="w-4 h-4" />} label="Student ID" value="MCS-2025-88" />
                            <InfoRow icon={<CalendarIcon className="w-4 h-4" />} label="Date of Birth" value="May 12, 2003" />
                            <InfoRow icon={<Shield className="w-4 h-4" />} label="Blood Group" value="O+" />
                        </SectionCard>
                    </div>
                )}

                {activeTab === 'academic' && (
                    <div className="space-y-4 animate-fade-in">
                        <SectionCard title="Course Details">
                            <InfoRow icon={<GraduationCap className="w-4 h-4" />} label="Certification" value="Medical Coding Specialist" />
                            <InfoRow icon={<BookOpen className="w-4 h-4" />} label="Batch" value="Oct 2025 (A-24)" />
                            <InfoRow icon={<Award className="w-4 h-4" />} label="Status" value="In Progress (Month 2/4)" />
                        </SectionCard>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-slate-900 dark:text-white">Achievements</h3>
                                <button className="text-primary text-xs font-medium">View All</button>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                <AchievementBadge icon="🏆" label="Top 10%" />
                                <AchievementBadge icon="⭐" label="Perfect Attendance" />
                                <AchievementBadge icon="📚" label="Bookworm" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div className="space-y-4 animate-fade-in">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                <SettingRow icon={<Bell className="w-4 h-4" />} label="Notifications" />
                                <SettingRow icon={<Shield className="w-4 h-4" />} label="Privacy & Security" />
                                <SettingRow icon={<Moon className="w-4 h-4" />} label="Dark Mode" toggle />
                                <SettingRow icon={<Edit3 className="w-4 h-4" />} label="Edit Profile" />
                            </div>
                        </div>

                        <button className="w-full p-4 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-medium flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                            <LogOut className="w-4 h-4" /> Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

function TabButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
    return (
        <button
            onClick={onClick}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${active
                ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
        >
            {label}
        </button>
    );
}

function SectionCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full"></span>
                {title}
            </div>
            <div className="p-5 space-y-5">
                {children}
            </div>
        </div>
    );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
            </div>
        </div>
    );
}

function AchievementBadge({ icon, label }: { icon: string, label: string }) {
    return (
        <div className="min-w-[100px] p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center gap-2">
            <span className="text-2xl">{icon}</span>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 leading-tight">{label}</span>
        </div>
    );
}

function SettingRow({ icon, label, toggle }: { icon: React.ReactNode, label: string, toggle?: boolean }) {
    return (
        <button className="w-full p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left group">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                {icon}
            </div>
            <span className="font-medium text-sm text-slate-700 dark:text-slate-300 flex-1">{label}</span>
            {toggle ? (
                <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
            ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
            )}
        </button>
    );
}

function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    );
}
