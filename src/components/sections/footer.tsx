export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-black/70 dark:text-white/70 flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Saurav Chanda</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
}