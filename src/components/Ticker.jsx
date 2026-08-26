const ITEMS = [
  'Branding',
  'Editorial',
  'Poster',
  'Print',
  'Type Design',
  'Packaging',
  'Art Direction',
]

function Row() {
  return (
    <span className="ticker-half flex shrink-0 items-center">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex shrink-0 items-center font-mono text-[11px] tracking-[0.2em] uppercase"
        >
          {item}
          <span className="mx-6 text-accent" aria-hidden="true">
            ★
          </span>
        </span>
      ))}
    </span>
  )
}

// Retro marquee strip — decorative, pauses on hover.
export default function Ticker() {
  return (
    <div className="ticker overflow-hidden border-b-2 border-ink py-2.5" aria-hidden="true">
      <div className="ticker-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  )
}
