"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";

export default function InquiryPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl" />
            </div>

            <div className="w-full max-w-2xl relative z-10">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="glass-card p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get in Touch</h1>
                        <p className="text-slate-500 dark:text-slate-400">Have questions? We'd love to hear from you.</p>
                    </div>

                    {submitted ? (
                        <div className="flex flex-col items-center text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
                            <p className="text-slate-500 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-primary font-medium hover:underline"
                            >
                                Send another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                                    <input type="text" id="name" required className="input-field" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                                    <input type="email" id="email" required className="input-field" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                                <input type="tel" id="phone" className="input-field" placeholder="+1 (555) 000-0000" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                <select id="subject" className="input-field appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Admissions</option>
                                    <option>Course Details</option>
                                    <option>Technical Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea id="message" required rows={4} className="input-field resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full flex justify-center items-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
