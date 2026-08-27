import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkCls = ({ isActive }) =>
  `link-slide font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent ${
    isActive ? 'text-accent' : ''
  }`

export default function Header() {
  const barRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper">
    <div className="relative mx-auto max-w-[1400px]">
      <div className="flex items-stretch justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 border-r border-ink px-4 py-3 sm:px-6"
        >
          <img
            src="/logo.png"
            alt="Khalid"
            className="h-7 w-7 object-contain"
          />
          <span className="text-lg font-black tracking-tight uppercase">
            Khalid
          </span>
          <span className="font-mono text-[10px] text-smoke">
            / Graphic&nbsp;Designer
          </span>
        </Link>

        <nav className="flex items-stretch">
          <div className="hidden items-center gap-5 border-l border-ink px-5 md:flex">
            <NavLink to="/works" className={linkCls}>
              Work
            </NavLink>
            <NavLink to="/blog" className={linkCls}>
              Journal
            </NavLink>
            <a href="/#about" className="link-slide font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent">
              About
            </a>
          </div>
          <a
            href="/cv.pdf"
            download="Khalid-CV.pdf"
            className="flex items-center gap-2 border-l border-ink bg-ink px-4 font-mono text-[11px] tracking-[0.15em] text-paper uppercase transition-colors hover:bg-accent sm:px-6"
          >
            CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>

      {/* mobile nav strip */}
      <div className="flex items-center gap-5 border-t border-ink px-4 py-2 md:hidden">
        <NavLink to="/works" className={linkCls}>
          Work
        </NavLink>
        <NavLink to="/blog" className={linkCls}>
          Journal
        </NavLink>
        <a href="/#about" className="link-slide font-mono text-[11px] tracking-[0.15em] uppercase">
          About
        </a>
      </div>
      </div>
      <div ref={barRef} className="progress-bar" aria-hidden="true" />
    </header>
  )
}
