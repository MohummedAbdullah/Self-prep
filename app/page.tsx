"use client";
import Link from 'next/link';
import { modules } from './data/modules';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
    {/* BACKGROUND LAYER */}


    {/* CONTENT LAYER WRAPPER */}
    {/* This container ignores pointer events, letting the background "see" your mouse */}
    <div className="relative z-10 pointer-events-none">
      
      {/* HERO SECTION */}
      {/* Re-enable pointer events so buttons and links work */}
      <section className="relative px-6 py-12 lg:py-20 ">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl mb-8">
            Full Stack Interview
            <span className="text-cyan-400 block sm:inline"> Prep</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-400 max-w-2xl mx-auto">
            Master technical interviews with comprehensive modules covering architecture, 
            frontend, and backend mastery.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Link
              href="/generic"
              className="rounded-full bg-cyan-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-all hover:scale-105"
            >
              Start Learning
              </Link>
              <div 
                  // href="#modules" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-base font-semibold text-slate-300 hover:text-white cursor-pointer"
                >
                  Browse Modules <span aria-hidden="true">→</span>
                </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6  ">
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

        {/* MODULES GRID */}
        <section id="modules" className="py-24 px-6 pointer-events-auto">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  href={module.path}
                  className="group relative rounded-2xl border border-slate-800/50 bg-slate-900/40 p-8 hover:bg-slate-800/60 transition-all hover:border-cyan-500/50 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {module.name}
                  </h3>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-white/5 pointer-events-auto">
          <div className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} — Built for developers.
          </div>
        </footer>
      </div>
    </div>
  );
}


// function InteractiveBackground() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePos({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div ref={containerRef} className="fixed inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
//       {/* Dynamic Spotlight */}
//       <div 
//         className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
//         style={{
//           background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(250, 250, 250, 0.22), transparent 100%)`
//         }}
//       />

//       {/* Static Ambient Glows */}
//       {/* <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-800/2 blur-[50px] pointer-events-none" /> */}
//       <div className="absolute top-[-10%] left-[-10%] w-[100%] h-[50%] rounded-full bg-cyan-100/10 blur-[80px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[50%] w-[20%] h-[50%] rounded-full bg-red-100/10 blur-[80px] pointer-events-none" />
//       {/* <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-200/5 blur-[50px] pointer-events-none" /> */}

      
//       {/* Noise Overlay - Fixed path */}
//       <div 
//         className="absolute inset-0 opacity-[0.93] pointer-events-none" 
//         style={{ backgroundImage: `url('/assets/nnnoise.svg')` }}
//       />
//     </div>
//   );
// }
