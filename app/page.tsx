import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, LayoutDashboard, Smartphone, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 flex flex-col">
      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          MedTechMakeIt
        </div>
        <div className="flex gap-4">
          <Link href="/inquiry" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Inquiry
          </Link>
          <Link href="/register" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Enroll Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm text-sm font-medium text-slate-600 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            New Batches Starting Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Fast-Track Your <br />
            <span className="text-primary">Medical Career</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Industry-ready certification courses in Medical Coding, Lab Technology, and Healthcare Management.
            <strong> 4 to 12 months</strong> intensive training.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/register" className="btn-primary flex items-center gap-2 group">
              Join Next Batch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/inquiry" className="btn-secondary">
              Download Brochure
            </Link>
          </div>

          {/* Course Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 opacity-80">
            {["Medical Coding (4 Months)", "Lab Technician (6 Months)", "X-Ray Tech (6 Months)", "OT Management (1 Year)"].map((course, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" /> {course}
              </div>
            ))}
          </div>
        </div>

        {/* App Showcase Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full px-4">
          {/* Student App Card */}
          <Link href="/studentapp" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-8 flex flex-col items-start h-full relative z-10">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Student Portal</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">Track your attendance, exam results, and access study materials for your certification course.</p>
              <div className="mt-auto flex items-center text-primary font-semibold">
                Login to Portal <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Admin App Card */}
          <Link href="/adminapp" className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-8 flex flex-col items-start h-full relative z-10">
              <div className="p-3 rounded-2xl bg-secondary/10 text-secondary mb-6">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Institute Admin</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">Manage batches, student fees, and course schedules efficiently.</p>
              <div className="mt-auto flex items-center text-secondary font-semibold">
                Access Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        © 2025 MedTechMakeIt. Professional Healthcare Training Institute.
      </footer>
    </div>
  );
}
