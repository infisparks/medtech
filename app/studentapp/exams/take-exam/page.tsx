"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, CheckCircle, AlertTriangle, ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock Exam Data
const MOCK_EXAM = {
    id: "mid-term-anatomy",
    title: "Anatomy Mid-Term Exam",
    duration: 60, // minutes
    questions: [
        {
            id: 1,
            type: "mcq",
            text: "Which of the following is the largest bone in the human body?",
            options: ["Femur", "Tibia", "Humerus", "Fibula"],
        },
        {
            id: 2,
            type: "multi",
            text: "Select all organs that are part of the digestive system.",
            options: ["Stomach", "Lungs", "Small Intestine", "Heart"],
        },
        {
            id: 3,
            type: "fill",
            text: "The human heart has ____ chambers.",
        },
        {
            id: 4,
            type: "mcq",
            text: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        }
    ]
};

export default function TakeExamPage() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [timeLeft, setTimeLeft] = useState(MOCK_EXAM.duration * 60);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Timer
    useEffect(() => {
        if (isSubmitted) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isSubmitted]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleAnswer = (value: any) => {
        setAnswers({ ...answers, [MOCK_EXAM.questions[currentQuestion].id]: value });
    };

    const handleMultiSelect = (option: string) => {
        const qId = MOCK_EXAM.questions[currentQuestion].id;
        const current = answers[qId] || [];
        const newAnswers = current.includes(option)
            ? current.filter((item: string) => item !== option)
            : [...current, option];
        setAnswers({ ...answers, [qId]: newAnswers });
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        // Here you would typically send data to backend
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl text-center max-w-md w-full">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Exam Submitted!</h2>
                    <p className="text-slate-500 mb-8">Your answers have been recorded successfully. Results will be published shortly.</p>
                    <Link href="/studentapp/exams" className="btn-primary w-full block">
                        Back to Exams
                    </Link>
                </div>
            </div>
        );
    }

    const question = MOCK_EXAM.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / MOCK_EXAM.questions.length) * 100;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            {/* Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 sticky top-0 z-20">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-bold text-slate-900 dark:text-white truncate pr-4">{MOCK_EXAM.title}</h1>
                    <div className={`flex items-center gap-2 font-mono font-bold px-3 py-1.5 rounded-lg ${timeLeft < 300 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-700'}`}>
                        <Clock className="w-4 h-4" />
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>Question {currentQuestion + 1} of {MOCK_EXAM.questions.length}</span>
                    <span>{Math.round(progress)}% Completed</span>
                </div>
            </header>

            {/* Question Area */}
            <main className="flex-1 p-4 pb-24 max-w-3xl mx-auto w-full">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 min-h-[300px] flex flex-col">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-3 inline-block uppercase tracking-wider">
                            {question.type === 'mcq' ? 'Single Choice' : question.type === 'multi' ? 'Multiple Choice' : 'Fill in the Blank'}
                        </span>
                        <h2 className="text-xl font-medium text-slate-900 dark:text-white leading-relaxed">
                            {question.text}
                        </h2>
                    </div>

                    <div className="space-y-3 flex-1">
                        {question.type === 'mcq' && question.options?.map((opt, idx) => (
                            <label
                                key={idx}
                                className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${answers[question.id] === opt
                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                        : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={`q-${question.id}`}
                                    className="w-5 h-5 text-primary border-slate-300 focus:ring-primary"
                                    checked={answers[question.id] === opt}
                                    onChange={() => handleAnswer(opt)}
                                />
                                <span className="ml-3 text-slate-700 dark:text-slate-300">{opt}</span>
                            </label>
                        ))}

                        {question.type === 'multi' && question.options?.map((opt, idx) => (
                            <label
                                key={idx}
                                className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${(answers[question.id] || []).includes(opt)
                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                        : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-primary rounded border-slate-300 focus:ring-primary"
                                    checked={(answers[question.id] || []).includes(opt)}
                                    onChange={() => handleMultiSelect(opt)}
                                />
                                <span className="ml-3 text-slate-700 dark:text-slate-300">{opt}</span>
                            </label>
                        ))}

                        {question.type === 'fill' && (
                            <div className="mt-4">
                                <input
                                    type="text"
                                    className="input-field text-lg"
                                    placeholder="Type your answer here..."
                                    value={answers[question.id] || ''}
                                    onChange={(e) => handleAnswer(e.target.value)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer Navigation */}
            <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 z-20">
                <div className="max-w-3xl mx-auto flex justify-between gap-4">
                    <button
                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestion === 0}
                        className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                    >
                        <ChevronLeft className="w-4 h-4" /> Prev
                    </button>

                    {currentQuestion === MOCK_EXAM.questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 rounded-xl bg-green-600 text-white font-bold shadow-lg shadow-green-600/20 hover:bg-green-700 transition-all flex-1 flex items-center justify-center gap-2"
                        >
                            Submit Exam <CheckCircle className="w-4 h-4" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentQuestion(prev => Math.min(MOCK_EXAM.questions.length - 1, prev + 1))}
                            className="px-6 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex-1 flex items-center justify-center gap-2"
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </footer>
        </div>
    );
}
