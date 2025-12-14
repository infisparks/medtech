import Link from "next/link";
import { ArrowLeft, Folder, FileText, Download, Search } from "lucide-react";

export default function NotesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/studentapp" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Study Materials</h1>
            </div>

            {/* Search */}
            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search notes, lectures..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                />
            </div>

            {/* Subjects Grid */}
            <div className="mb-8">
                <h2 className="font-bold text-slate-900 dark:text-white mb-4">Subjects</h2>
                <div className="grid grid-cols-2 gap-4">
                    <SubjectFolder title="Anatomy" count="12 files" color="bg-blue-100 text-blue-600" />
                    <SubjectFolder title="Physiology" count="8 files" color="bg-purple-100 text-purple-600" />
                    <SubjectFolder title="Biochemistry" count="15 files" color="bg-orange-100 text-orange-600" />
                    <SubjectFolder title="Pathology" count="6 files" color="bg-green-100 text-green-600" />
                </div>
            </div>

            {/* Recent Files */}
            <div>
                <h2 className="font-bold text-slate-900 dark:text-white mb-4">Recent Uploads</h2>
                <div className="space-y-3">
                    <FileItem title="Cardiovascular System Notes" size="2.4 MB" date="Today" type="pdf" />
                    <FileItem title="Nervous System Diagram" size="1.1 MB" date="Yesterday" type="img" />
                    <FileItem title="Lab Safety Guidelines" size="500 KB" date="Oct 20" type="doc" />
                </div>
            </div>
        </div>
    );
}

function SubjectFolder({ title, count, color }: { title: string, count: string, color: string }) {
    return (
        <button className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                <Folder className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{title}</h3>
            <p className="text-xs text-slate-500">{count}</p>
        </button>
    );
}

function FileItem({ title, size, date, type }: { title: string, size: string, date: string, type: string }) {
    return (
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                    <FileText className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm line-clamp-1">{title}</h4>
                    <p className="text-xs text-slate-500">{size} • {date}</p>
                </div>
            </div>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-primary transition-colors">
                <Download className="w-4 h-4" />
            </button>
        </div>
    );
}
