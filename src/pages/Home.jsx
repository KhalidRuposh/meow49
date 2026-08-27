import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import WorkCard from '../components/WorkCard.jsx'
import PostRow from '../components/PostRow.jsx'
import ArrowLink from '../components/ArrowLink.jsx'
import Figure from '../components/Figure.jsx'
import Ticker from '../components/Ticker.jsx'
import Reveal from '../components/Reveal.jsx'
import { works } from '../data/works.js'
import { posts } from '../data/posts.js'

function RegMark({ className = '' }) {
  return <span aria-hidden="true" className={`reg-mark absolute h-4 w-4 ${className}`} />
}

export default function Home() {
  const featured = works.filter((w) => w.featured)
  const latest = posts.slice(0, 3)

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative border-b-2 border-ink px-2 pt-10 pb-14 sm:px-6 sm:pt-16">
        <RegMark className="top-4 left-0 hidden sm:block" />
        <RegMark className="top-4 right-0 hidden sm:block" />

        <div className="hero-meta flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
          <span>Portfolio — No. 04</span>
          <span className="inline-flex items-center gap-1.5">
            Est. 2019
            <span className="blink text-accent" aria-hidden="true">
              ▮
            </span>
          </span>
          <span className="hidden sm:inline">Light mode only</span>
        </div>

        <h1 className="mt-8 text-[15vw] leading-[0.88] font-black tracking-tighter uppercase sm:text-[11vw] lg:text-[9rem]">
          <span className="hero-mask">
            <span className="hero-line" style={{ animationDelay: '0.05s' }}>
              Creative
            </span>
          </span>
          <span className="hero-mask">
            <span className="hero-line" style={{ animationDelay: '0.18s' }}>
              Designer
              <span
                aria-hidden="true"
                className="hero-stamp mb-[0.12em] ml-4 inline-block h-[0.42em] w-[0.42em] shrink-0 bg-accent"
              />
            </span>
          </span>
        </h1>

        <div className="hero-cta mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-relaxed sm:text-lg">
            I&apos;m <strong>Khalid</strong> — I design identities, posters and
            printed matter with a fondness for grids, ink and the occasional
            rubber stamp. Less, but better; old, but alive.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/works"
              className="inline-flex items-center gap-3 border-2 border-ink bg-ink px-6 py-3 font-mono text-[11px] tracking-[0.15em] text-paper uppercase transition-colors hover:border-accent hover:bg-accent"
            >
              See work <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#about"
              className="link-slide font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent"
            >
              About me ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────────────── */}
      <Ticker />

      {/* ── 01 / Selected work ───────────────────────────────── */}
      <section className="py-14">
        <Reveal>
          <SectionHeading index="01" title="Selected Work" note={`${works.length} projects total`} />
        </Reveal>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {featured.map((w, i) => (
            <Reveal key={w.id} delay={i * 90}>
              <WorkCard work={w} index={works.indexOf(w)} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/works"
            className="arrow-nudge inline-flex items-center gap-3 border-2 border-ink px-8 py-4 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors hover:bg-accent hover:border-accent hover:text-paper"
          >
            <span>See all works ({works.length})</span>
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      {/* ── 02 / About ───────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24 border-t-2 border-ink py-14">
        <Reveal>
          <SectionHeading index="02" title="About" note="Khalid — Lahore, PK" />
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="hidden md:block">
              <Figure variant={2} src="https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787814979/portfolio/portfolio/about-portrait.jpg" label="The designer, fig. 01" className="max-w-sm" />
            </div>
            <p className="mt-0 max-w-xl leading-relaxed md:mt-8">
              Seven years of making things that get printed, stuck, stamped and
              read. I grew up surrounded by letterpress tickets, film posters and
              my uncle&apos;s typesetting catalogue — and never quite got over it.
              Today I work with studios and small businesses who want design that
              is calm, confident and a little bit old-fashioned on purpose.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed">
              The method is unglamorous: paper first, one typeface, one grid,
              honest constraints. If a layout survives being printed in one
              colour on cheap paper, it will survive anything.
            </p>
            <a
              href="/cv.pdf"
              download="Khalid-CV.pdf"
              className="arrow-nudge mt-8 inline-flex items-center gap-3 border-2 border-ink px-6 py-3 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-paper"
            >
              <span>Download CV</span>
              <span aria-hidden="true">↓</span>
            </a>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={120}>
              <h3 className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
                Services
              </h3>
              <ul className="mt-3">
                {['Brand Identity', 'Editorial Design', 'Poster & Print', 'Packaging', 'Type Design', 'Art Direction'].map(
                  (s) => (
                    <li
                      key={s}
                      className="flex items-baseline justify-between border-b border-ink/20 py-2.5 text-sm font-semibold"
                    >
                      {s}
                      <span aria-hidden="true" className="font-mono text-[10px] text-accent">
                        ●
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <h3 className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
                Selected clients
              </h3>
              <ul className="mt-3">
                {['Rilo Coffee', 'Papier Publishing', 'Stadt Theatre', 'Nordwind Records', 'Design Museum'].map(
                  (c) => (
                    <li
                      key={c}
                      className="border-b border-ink/20 py-2.5 text-sm font-semibold"
                    >
                      {c}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 03 / Journal ─────────────────────────────────────── */}
      <section className="border-t-2 border-ink py-14">
        <Reveal>
          <SectionHeading index="03" title="Journal" note="Notes on design" />
        </Reveal>
        <div className="mt-6">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PostRow post={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <ArrowLink to="/blog">All entries</ArrowLink>
        </Reveal>
      </section>
    </div>
  )
}
