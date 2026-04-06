'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ModuleLayoutProps {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
  sections: { id: string; title: string }[];
}

export function ModuleLayout({ title, description, icon, children, sections }: ModuleLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <span className="text-slate-600">/</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <h1 className="text-lg font-semibold text-white">{title}</h1>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className={`
            ${isSidebarOpen ? 'fixed inset-0 z-40 bg-slate-950 lg:static lg:bg-transparent' : 'hidden lg:block'}
            lg:w-64 flex-shrink-0
          `}>
            <div className="lg:sticky lg:top-24 p-4 lg:p-0">
              <div className="mb-6 lg:hidden">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="space-y-1">
                <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Sections
                </p>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{icon}</span>
                <div>
                  <h1 className="text-4xl font-bold text-white">{title}</h1>
                  <p className="mt-2 text-lg text-slate-400">{description}</p>
                </div>
              </div>
            </div>

            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
