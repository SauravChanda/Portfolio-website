export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 border-t-4 border-white relative">
      <div className="px-6">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
          // ABOUT ME
        </h2>
        <p className="mt-6 max-w-3xl text-white/80 font-mono">
          Great question! I build production‑grade applications end‑to‑end: frontend UI, backend APIs, data modeling, testing, and CI/CD.
          Think of me as your digital architect who cares about maintainability and shipping features efficiently - because nobody likes spaghetti code (except for dinner)
        </p>
        <p className="mt-4 max-w-3xl text-white/60 font-mono text-sm uppercase">
          // WHAT YOU GET
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <li className="rounded-none border-4 border-white p-4 font-mono uppercase">Clean architecture & modular design</li>
          <li className="rounded-none border-4 border-white p-4 font-mono uppercase">Performance optimization: caching, SSR/ISR, profiling</li>
          <li className="rounded-none border-4 border-white p-4 font-mono uppercase">Comprehensive testing: unit, integration, e2e</li>
          <li className="rounded-none border-4 border-white p-4 font-mono uppercase">DevOps mastery: Docker, CI/CD, cloud deployment</li>
        </ul>
      </div>
    </section>
  );
}