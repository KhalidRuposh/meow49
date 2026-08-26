import { Link } from 'react-router-dom'

export default function ArrowLink({ to, href, children, className = '' }) {
  const cls = `link-slide arrow-nudge inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}
