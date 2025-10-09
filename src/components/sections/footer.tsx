export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-black/70 dark:text-white/70">
        <div className="text-center mb-6">
          <p className="text-base font-medium mb-2">🎯 Thanks for scrolling this far!</p>
          <p className="text-sm">
            You&apos;ve made it to the end - that&apos;s dedication! Ready to start a conversation? 
            I&apos;m just a click away! ✨
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Saurav Chanda - Built with ❤️ and lots of ☕</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/sauravchanda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub 🚀
            </a>
            <a 
              href="https://www.linkedin.com/in/sauravchanda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn 💼
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              X 🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}