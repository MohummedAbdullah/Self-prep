import Link from 'next/link';
import { modules } from './data/modules';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-2">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
            Full Stack Interview
            <span className="text-cyan-400"> Prep</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Master technical interviews with comprehensive modules covering full-stack development,
            system architecture, and developer best practices across multiple technologies.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/generic"
              className="rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-cyan-400 transition-all hover:scale-105"
            >
              Start Learning
            </Link>
            <Link href="#modules" className="text-base font-semibold text-slate-300 hover:text-white">
              Browse Modules <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center sm:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-base text-slate-400">Modules</dt>
              <dd className="text-3xl font-semibold text-cyan-400">{modules.length}</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-base text-slate-400">Technologies</dt>
              <dd className="text-3xl font-semibold text-cyan-400">9+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-base text-slate-400">Topics</dt>
              <dd className="text-3xl font-semibold text-cyan-400">100+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-base text-slate-400">Questions</dt>
              <dd className="text-3xl font-semibold text-cyan-400">200+</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Learning Modules</h2>
            <p className="mt-4 text-lg text-slate-400">Choose your path to interview mastery</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.path}
                className="group relative rounded-2xl border border-slate-700 bg-slate-800/50 p-8 hover:bg-slate-800 transition-all hover:scale-[1.02] hover:border-cyan-500/50"
              >
                <div className="flex items-center gap-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {module.name}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {module.description}
                </p>
                <div className="flex items-center text-sm text-cyan-400 font-medium">
                  Explore module
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-slate-400 text-sm">
            Full Stack Interview Prep © {new Date().getFullYear()} — Built for developers, by developers
          </p>
        </div>
      </footer>
    </div>
  );
}
