export default function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
        <img
          src="/logo.png"
          alt="Khalid"
          className="mb-8 h-12 w-12 object-contain"
        />
        <p className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
          Got a project? — 04
        </p>
        <a
          href="mailto:hello@khalid.design"
          className="link-slide mt-3 inline-block text-4xl font-black tracking-tight uppercase break-all hover:text-accent sm:text-6xl"
        >
          hello@khalid.design
        </a>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-ink pt-6">
          <div className="flex gap-6 font-mono text-[11px] tracking-[0.15em] uppercase">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="link-slide hover:text-accent">
              Instagram
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="link-slide hover:text-accent">
              Behance
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-slide hover:text-accent">
              LinkedIn
            </a>
          </div>
          <p className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
            © 2026 Khalid — Set in Archivo &amp; Space Mono
          </p>
        </div>
      </div>
    </footer>
  )
}
