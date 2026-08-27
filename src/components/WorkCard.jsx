import { Link } from 'react-router-dom'
import Figure from './Figure.jsx'

export default function WorkCard({ work, index }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <Link to={`/works/${work.id}`} className="group block">
      <Figure
        variant={work.figure}
        src={work.images?.[0]}
        label={`${work.category} — ${work.year}`}
        className="transition-colors"
      />
      <div className="flex items-baseline justify-between border-b border-ink py-3">
        <h3 className="text-lg font-extrabold tracking-tight uppercase group-hover:text-accent">
          {work.title}
        </h3>
        <span className="ml-4 shrink-0 font-mono text-[11px] tracking-[0.15em] text-smoke">
          {num}
        </span>
      </div>
    </Link>
  )
}
