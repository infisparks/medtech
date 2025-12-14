"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, GraduationCap, User, MapPin, BookOpen } from "lucide-react";

export default function RegistrationPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setSubmitted(true), 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-3xl" />
            </div>

            <div className="w-full max-w-3xl relative z-10 my-10">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="glass-card overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
                        <h1 className="text-3xl font-bold mb-2">Course Enrollment</h1>
                        <p className="opacity-90">Register for our professional certification programs.</p>
                    </div>

                    <div className="p-8 md:p-12">
                        {submitted ? (
                            <div className="flex flex-col items-center text-center py-12 animate-fade-in">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enrollment Successful!</h3>
                                <p className="text-slate-500 mb-8 max-w-md">Your application has been received. Our admissions team will contact you shortly for the next steps.</p>
                                <Link href="/" className="btn-primary">
                                    Return Home
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Details */}
                                <section>
                                    <div className="flex items-center gap-2 mb-6 text-primary border-b border-slate-100 pb-2">
                                        <User className="w-5 h-5" />
                                        <h2 className="text-lg font-semibold">Student Information</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">First Name</label>
                                            <input type="text" required className="input-field" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Last Name</label>
                                            <input type="text" required className="input-field" placeholder="Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                                            <input type="date" required className="input-field" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Gender</label>
                                            <select className="input-field">
                                                <option>Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>

                                {/* Contact Details */}
                                <section>
                                    <div className="flex items-center gap-2 mb-6 text-primary border-b border-slate-100 pb-2">
                                        <MapPin className="w-5 h-5" />
                                        <h2 className="text-lg font-semibold">Contact Details</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                                            <input type="email" required className="input-field" placeholder="jane@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                            <input type="tel" required className="input-field" placeholder="+1 (555) 000-0000" />
                                        </div>
                                        <div className="col-span-1 md:col-span-2 space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Address</label>
                                            <input type="text" required className="input-field" placeholder="123 Main St, City, Country" />
                                        </div>
                                    </div>
                                </section>

                                {/* Course Selection */}
                                <section>
                                    <div className="flex items-center gap-2 mb-6 text-primary border-b border-slate-100 pb-2">
                                        <BookOpen className="w-5 h-5" />
                                        <h2 className="text-lg font-semibold">Course Selection</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Select Certification</label>
                                            <select className="input-field" required>
                                                <option value="">Choose a course...</option>
                                                <option>Medical Coding Specialist (4 Months)</option>
                                                <option>Medical Lab Technician (6 Months)</option>
                                                <option>X-Ray Technician (6 Months)</option>
                                                <option>Operation Theatre Technology (1 Year)</option>
                                                <option>Hospital Administration (6 Months)</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Preferred Batch</label>
                                            <select className="input-field">
                                                <option>Upcoming Batch (Starts Oct 15)</option>
                                                <option>Next Batch (Starts Nov 01)</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>

                                <div className="pt-4">
                                    <button type="submit" className="btn-primary w-full text-lg">
                                        Complete Enrollment
                                    </button>
                                    <p className="text-xs text-center text-slate-400 mt-4">
                                        By clicking "Complete Enrollment", you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
