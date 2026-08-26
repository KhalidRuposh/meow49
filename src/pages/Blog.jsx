import SectionHeading from '../components/SectionHeading.jsx'
import PostRow from '../components/PostRow.jsx'
import Reveal from '../components/Reveal.jsx'
import { posts } from '../data/posts.js'

export default function Blog() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
      <Reveal>
        <SectionHeading
          index="00"
          title="Journal — All Entries"
          note={`${posts.length} notes on design`}
        />
      </Reveal>
      <div className="mt-6">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <PostRow post={p} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
