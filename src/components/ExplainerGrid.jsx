import { Link } from 'react-router-dom'
import { getExplainers } from '../content/posts'
import ComingSoon from './ComingSoon'

export default function ExplainerGrid({ group }) {
  const explainers = getExplainers(group)

  if (explainers.length === 0) {
    return <ComingSoon>Explainers will be added here.</ComingSoon>
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {explainers.map((post) => (
        <Link
          key={post.slug}
          to={`/articles/${post.slug}`}
          className="rounded-lg border border-brand-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <h3 className="font-semibold text-brand-blue-900">{post.title}</h3>
          {post.kicker && <p className="mt-1 text-sm text-brand-blue-600">{post.kicker}</p>}
        </Link>
      ))}
    </div>
  )
}
