import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import WorkCard from '../components/WorkCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { works, categories } from '../data/works.js'

export default function Works() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', ...categories]
  const shown = filter === 'All' ? works : works.filter((w) => w.category === filter)

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
      <Reveal>
        <SectionHeading
          index="00"
          title="Index — All Works"
          note={`${shown.length} / ${works.length} shown`}
        />
      </Reveal>

      <Reveal delay={100} className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`border border-ink px-4 py-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors ${
              filter === f
                ? 'bg-ink text-paper'
                : 'hover:bg-mist'
            }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w, i) => (
          <Reveal key={w.id} delay={(i % 3) * 90}>
            <WorkCard work={w} index={works.indexOf(w)} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
