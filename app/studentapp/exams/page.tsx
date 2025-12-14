import Link from "next/link";
import { ArrowLeft, Clock, FileText, CheckCircle, AlertCircle, ChevronRight } from "lucide-react";

export default function ExamsListPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Online Exams</h1>
            </div>

            <div className="space-y-6">
                {/* Active Exams */}
                <div>
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Active Now</h2>
                    <div className="space-y-4">
                        <ExamCard
                            id="coding-module-1"
                            title="ICD-10 Coding Basics"
                            subject="Medical Coding"
                            duration="60 mins"
                            questions={40}
                            status="active"
                            dueDate="Ends in 2 hours"
                        />
                    </div>
                </div>

                {/* Upcoming */}
                <div>
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Upcoming</h2>
                    <div className="space-y-4">
                        <ExamCard
                            id="cpt-quiz"
                            title="CPT Coding Quiz"
                            subject="Medical Coding"
                            duration="30 mins"
                            questions={20}
                            status="upcoming"
                            dueDate="Starts Tomorrow, 10 AM"
                        />
                        <ExamCard
                            id="anatomy-final"
                            title="Medical Terminology Final"
                            subject="Anatomy & Terminology"
                            duration="90 mins"
                            questions={80}
                            status="upcoming"
                            dueDate="Oct 25, 09:00 AM"
                        />
                    </div>
                </div>            </div>
            {/* Completed */}
            <div>
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Completed</h2>
                <div className="space-y-4">
                    <ExamCard
                        id="patho-quiz-1"
                        title="Pathology Basics"
                        subject="Pathology"
                        duration="45 mins"
                        questions={30}
                        status="completed"
                        score="28/30"
                    />
                </div>
            </div>
        </div>
    );
}

function ExamCard({ id, title, subject, duration, questions, status, dueDate, score }: {
    id: string, title: string, subject: string, duration: string, questions: number, status: 'active' | 'upcoming' | 'completed', dueDate?: string, score?: string
}) {
    const isCompleted = status === 'completed';
    const isActive = status === 'active';

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 shadow-sm relative overflow-hidden">
            {isActive && <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-bl-full -mr-10 -mt-10"></div>}

            <div className="flex justify-between items-start mb-3">
                <div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md mb-2 inline-block">
                        {subject}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">{title}</h3>
                </div>
                {isCompleted ? (
                    <div className="text-right">
                        <span className="block text-xs text-slate-400">Score</span>
                        <span className="font-bold text-green-600 text-lg">{score}</span>
                    </div>
                ) : (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-green-100 text-green-600 animate-pulse' : 'bg-slate-100 text-slate-400'}`}>
                        <FileText className="w-5 h-5" />
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {duration}
                </div>
                <div className="flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {questions} Questions
                </div>
            </div>

            {isActive ? (
                <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {dueDate}
                    </span>
                    <Link href={`/studentapp/exams/take-exam?id=${id}`} className="btn-primary py-2 px-4 text-xs flex items-center gap-1">
                        Start Exam <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
            ) : isCompleted ? (
                <div className="w-full py-2 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-xs font-medium text-slate-500">
                    <CheckCircle className="w-3 h-3 mr-1 text-green-500" /> Completed
                </div>
            ) : (
                <div className="w-full py-2 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-xs font-medium text-slate-500">
                    Scheduled: {dueDate}
                </div>
            )}
        </div>
    );
}
