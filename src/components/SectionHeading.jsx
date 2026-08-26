export default function SectionHeading({ index, title, note }) {
  return (
    <div className="border-t-2 border-ink pt-3">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="flex items-baseline gap-3 text-xl font-extrabold tracking-tight uppercase sm:text-2xl">
          <span className="font-mono text-sm font-normal text-accent">
            {index}
          </span>
          {title}
        </h2>
        {note && (
          <span className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
            {note}
          </span>
        )}
      </div>
    </div>
  )
}
