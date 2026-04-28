export function Footer() {
  return (
    <footer className="border-t-4 border-white relative">
      <div className="w-full px-6 py-8 text-sm">
        <div className="text-center mb-6">
          <p className="text-base font-black uppercase mb-2 tracking-tighter">{'//'} THANKS FOR SCROLLING</p>
          <p className="text-sm font-mono text-white/60">
            You&apos;ve made it to the end - that&apos;s dedication! Ready to start a conversation?
            I&apos;m just a click away!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono uppercase tracking-tighter">© {new Date().getFullYear()} SAURAV CHANDA</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/SauravChanda"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-black hover:text-white/60 transition-colors border-b-2 border-white"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-chanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-black hover:text-white/60 transition-colors border-b-2 border-white"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}