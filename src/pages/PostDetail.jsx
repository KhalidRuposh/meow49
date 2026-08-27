import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { posts } from '../data/posts.js'

export default function PostDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
          404 — This page went to press without ink
        </p>
        <Link to="/blog" className="link-slide mt-4 inline-block font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent">
          ← Back to blog
        </Link>
      </div>
    )
  }

  const others = posts.filter((p) => p.slug !== slug)

  return (
    <article className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
      <Link
        to="/blog"
        className="link-slide font-mono text-[11px] tracking-[0.15em] uppercase hover:text-accent"
      >
         ← Blog
      </Link>

      <Reveal>
        <header className="mt-6 max-w-3xl border-b-2 border-ink pb-8">
          <p className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
            {post.date} — {post.category}
          </p>
          <h1 className="mt-3 text-4xl leading-[1.02] font-black tracking-tight sm:text-6xl">
            {post.title}
          </h1>
        </header>
      </Reveal>

      <div className="max-w-2xl space-y-6 pt-10 text-lg leading-relaxed">
        {post.body.map((paragraph, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className={i === 0 ? 'font-medium' : ''}>{paragraph}</p>
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <section className="mt-20 border-t-2 border-ink pt-6">
          <h2 className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
            Keep reading
          </h2>
          <div className="mt-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex items-baseline justify-between border-b border-ink py-4"
              >
                <span className="font-bold tracking-tight group-hover:text-accent">
                  {p.title}
                </span>
                <span aria-hidden="true" className="font-mono group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
