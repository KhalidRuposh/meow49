// Deterministic Swiss-style placeholder artwork.
// Replace with real project images when you have them.

export default function Figure({ variant = 0, label, className = '' }) {
  const v = variant % 6
  return (
    <figure className={className}>
      <div className="figure-frame border border-ink bg-mist">
        <svg
          viewBox="0 0 400 300"
          className="block aspect-[4/3] w-full"
          role="img"
          aria-label={label || 'Placeholder artwork'}
        >
          {/* frame */}
          <rect x="12" y="12" width="376" height="276" fill="none" stroke="#111" strokeWidth="1" />

          {v === 0 && (
            <g>
              <circle cx="130" cy="150" r="85" fill="#E30613" />
              <rect x="230" y="60" width="60" height="180" fill="#111" />
              <circle cx="290" cy="240" r="8" fill="#111" />
            </g>
          )}
          {v === 1 && (
            <g>
              <path d="M 60 240 A 160 160 0 0 1 220 80 L 220 240 Z" fill="#111" />
              <circle cx="290" cy="110" r="34" fill="#E30613" />
              <rect x="260" y="180" width="80" height="8" fill="#111" />
              <rect x="260" y="200" width="56" height="8" fill="#111" />
              <rect x="260" y="220" width="68" height="8" fill="#111" />
            </g>
          )}
          {v === 2 && (
            <g>
              <polygon points="60,240 190,240 60,110" fill="#111" />
              <rect x="230" y="60" width="110" height="110" fill="#E30613" />
              <rect x="60" y="260" width="280" height="6" fill="#111" />
              <circle cx="345" cy="205" r="12" fill="none" stroke="#111" strokeWidth="1" />
            </g>
          )}
          {v === 3 && (
            <g>
              <circle cx="200" cy="150" r="105" fill="none" stroke="#111" strokeWidth="2" />
              <circle cx="200" cy="150" r="70" fill="none" stroke="#111" strokeWidth="2" />
              <circle cx="200" cy="150" r="35" fill="#E30613" />
              <rect x="330" y="146" width="40" height="2" fill="#111" />
              <rect x="30" y="146" width="40" height="2" fill="#111" />
            </g>
          )}
          {v === 4 && (
            <g>
              {Array.from({ length: 6 }).map((_, r) =>
                Array.from({ length: 9 }).map((_, c) => (
                  <circle
                    key={`${r}-${c}`}
                    cx={60 + c * 35}
                    cy={70 + r * 32}
                    r={3}
                    fill="#111"
                  />
                )),
              )}
              <circle cx="255" cy="150" r="78" fill="#E30613" />
              <rect x="255" y="150" width="78" height="2" fill="#FAFAF7" />
            </g>
          )}
          {v === 5 && (
            <g>
              <rect x="70" y="60" width="26" height="180" fill="#111" />
              <rect x="110" y="60" width="10" height="180" fill="#111" />
              <rect x="132" y="60" width="40" height="180" fill="#E30613" />
              <rect x="188" y="60" width="10" height="180" fill="#111" />
              <rect x="210" y="60" width="26" height="180" fill="#111" />
              <rect x="70" y="250" width="166" height="6" fill="#111" />
              <circle cx="305" cy="150" r="42" fill="none" stroke="#111" strokeWidth="2" />
            </g>
          )}
        </svg>
      </div>
      {label && (
        <figcaption className="mt-2 flex justify-between font-mono text-[10px] tracking-[0.15em] text-smoke uppercase">
          <span>{label}</span>
          <span>Fig.</span>
        </figcaption>
      )}
    </figure>
  )
}
