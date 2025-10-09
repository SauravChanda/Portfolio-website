export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 border-t border-black/5 dark:border-white/10">
      <h2 className="text-2xl sm:text-3xl font-bold">
        <span className="text-emerald-600 dark:text-emerald-400">🤔 Curious about what I do?</span>
      </h2>
      <p className="mt-4 max-w-3xl text-black/80 dark:text-white/80">
        Great question! I build production‑grade applications end‑to‑end: frontend UI, backend APIs, data modeling, testing, and CI/CD. 
        Think of me as your digital architect who cares about maintainability and shipping features efficiently - because nobody likes spaghetti code (except for dinner) 🍝
      </p>
      <p className="mt-3 max-w-3xl text-black/70 dark:text-white/70 text-sm">
        👇 Here&apos;s what you can expect when we work together:
      </p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <li className="rounded-md border p-4">🏗️ Clean architecture & modular design (No more &quot;it works on my machine!&quot;)</li>
        <li className="rounded-md border p-4">⚡ Performance optimization: caching, SSR/ISR, profiling (Speed that&apos;ll make you smile)</li>
        <li className="rounded-md border p-4">✅ Comprehensive testing: unit, integration, e2e (Because bugs are not features)</li>
        <li className="rounded-md border p-4">☁️ DevOps mastery: Docker, CI/CD, cloud deployment (Your code, delivered fresh daily)</li>
      </ul>
    </section>
  );
}