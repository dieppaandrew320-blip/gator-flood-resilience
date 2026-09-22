import { Link } from 'react-router-dom'
import { getExplainers } from '../content/posts'
import ComingSoon from './ComingSoon'

export default function ExplainerGrid({ group }) {
  const explainers = getExplainers(group)

  if (explainers.length === 0) {
    return <ComingSoon>Explainers will be added here.</ComingSoon>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {explainers.map((post) => (
        <Link
          key={post.slug}
          to={`/articles/${post.slug}`}
          className="group overflow-hidden rounded-lg border border-brand-blue-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {post.image ? (
            <img src={post.image.url} alt={post.image.alt || ''} className="aspect-video w-full object-cover" loading="lazy" />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-brand-blue-50 text-xs font-medium text-brand-blue-300">
              No image yet
            </div>
          )}
          <div className="p-5">
            <h3 className="font-semibold text-brand-blue-900 group-hover:text-brand-orange-600">{post.title}</h3>
            {post.kicker && <p className="mt-1 text-sm text-brand-blue-600">{post.kicker}</p>}
          </div>
        </Link>
      ))}
    </div>
  )
}
