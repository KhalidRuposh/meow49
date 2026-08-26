import { Link } from 'react-router-dom'

export default function PostRow({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-ink py-4 sm:grid-cols-[110px_1fr_auto]"
    >
      <time
        dateTime={post.date}
        className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase"
      >
        {post.date}
      </time>
      <h3 className="text-base font-bold tracking-tight group-hover:text-accent sm:text-lg">
        {post.title}
      </h3>
      <span
        aria-hidden="true"
        className="font-mono transition-transform group-hover:translate-x-1 group-hover:text-accent"
      >
        →
      </span>
    </Link>
  )
}
