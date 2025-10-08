export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 border-t border-black/5 dark:border-white/10">
      <h2 className="text-2xl sm:text-3xl">About</h2>
      <p className="mt-4 max-w-3xl text-black/80 dark:text-white/80">
        I build production‑grade applications end‑to‑end: frontend UI, backend APIs, data modeling, testing, and CI/CD. I care about maintainability and shipping features efficiently.
      </p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <li className="rounded-md border p-4">Clean architecture & modular design</li>
        <li className="rounded-md border p-4">Performance: caching, SSR/ISR, profiling</li>
        <li className="rounded-md border p-4">Testing: unit, integration, e2e</li>
        <li className="rounded-md border p-4">DevOps: Docker, CI/CD, basic cloud</li>
      </ul>
    </section>
  );
}