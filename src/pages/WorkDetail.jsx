import { Link, useParams } from 'react-router-dom'
import Figure from '../components/Figure.jsx'
import Reveal from '../components/Reveal.jsx'
import { works } from '../data/works.js'

function MetaCell({ label, value }) {
  return (
    <div className="border-b border-l border-ink p-4 first:border-l-0">
      <dt className="font-mono text-[10px] tracking-[0.15em] text-smoke uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-bold uppercase">{value}</dd>
    </div>
  )
}

export default function WorkDetail() {
  const { id } = useParams()
  const index = works.findIndex((w) => w.id === id)
  const work = works[index]

  if (!work) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
          404 — Not found in the index
        </p>
        <Link to="/works" className="link-slide mt-4 inline-block font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent">
          ← Back to all works
        </Link>
      </div>
    )
  }

  const prev = works[(index - 1 + works.length) % works.length]
  const next = works[(index + 1) % works.length]
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
      <Link
        to="/works"
        className="link-slide font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent"
      >
        ← Index
      </Link>

      <header className="mt-6 border-b-2 border-ink pb-8">
        <p className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase">
          Work {num} — {work.category}
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl leading-[0.95] font-black tracking-tighter uppercase sm:text-7xl">
          {work.title}
        </h1>
      </header>

      <Reveal>
        <dl className="mt-8 grid grid-cols-2 border border-b-0 border-ink lg:grid-cols-4">
          <MetaCell label="Client" value={work.client} />
          <MetaCell label="Role" value={work.role} />
          <MetaCell label="Year" value={work.year} />
          <MetaCell label="Deliverables" value={work.deliverables} />
        </dl>
      </Reveal>

      <Reveal className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Figure variant={work.figure} label={`${work.title} — primary`} />
        <div>
          <h2 className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
            Overview
          </h2>
          <p className="mt-4 text-lg leading-relaxed">{work.overview}</p>
        </div>
      </Reveal>

      {work.body.map((section, i) => (
        <Reveal key={section.heading} className="mt-16 grid gap-8 lg:grid-cols-2">
          <Figure
            variant={(work.figure + i + 1) % 6}
            label={`${work.title} — fig. 0${i + 1}`}
          />
          <div className="lg:pt-4">
            <h2 className="flex items-baseline gap-3 text-2xl font-extrabold tracking-tight uppercase">
              <span className="font-mono text-sm font-normal text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              {section.heading}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed">{section.text}</p>
          </div>
        </Reveal>
      ))}

      <nav className="mt-20 grid border-t-2 border-ink sm:grid-cols-2">
        <Link
          to={`/works/${prev.id}`}
          className="group border-b border-ink p-6 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-mist sm:border-r sm:border-b-0"
        >
          ← Prev
          <span className="mt-2 block text-base font-sans font-extrabold normal-case group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
        <Link
          to={`/works/${next.id}`}
          className="group p-6 text-right font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-mist"
        >
          Next →
          <span className="mt-2 block text-base font-sans font-extrabold normal-case group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      </nav>
    </article>
  )
}
