import { Link } from 'react-router-dom'
import { CATEGORY_LABELS } from '../content/posts'

function formatDate(dateStr) {
  const date = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// A single article/case-study preview row: image on the side (top on
// mobile), text alongside it. Used by the Articles archive and the Home
// page's "Latest Articles" preview for a consistent, vertical, editorial
// layout instead of a grid of square cards.
export default function ArticleRow({ post, linkPrefix = '/articles' }) {
  const categoryLabel = post.type === 'article' ? CATEGORY_LABELS[post.category] || 'Article' : 'Case Study'

  return (
    <Link
      to={`${linkPrefix}/${post.slug}`}
      className="group flex flex-col gap-5 border-b border-brand-blue-100 py-6 first:pt-0 last:border-b-0 sm:flex-row"
    >
      <div className="sm:w-64 sm:shrink-0">
        {post.image ? (
          <img
            src={post.image.url}
            alt={post.image.alt || ''}
            className="aspect-[4/3] w-full rounded-lg object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg bg-brand-blue-50 text-xs font-medium text-brand-blue-300">
            No image yet
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-600">{categoryLabel}</p>
        <h3 className="mt-1 text-xl font-bold text-brand-blue-900 group-hover:text-brand-orange-600">{post.title}</h3>
        {(post.summary || post.kicker) && (
          <p className="mt-2 text-brand-blue-600">{post.summary || post.kicker}</p>
        )}
        <p className="mt-3 text-xs text-brand-blue-400">{formatDate(post.date)}</p>
      </div>
    </Link>
  )
}
