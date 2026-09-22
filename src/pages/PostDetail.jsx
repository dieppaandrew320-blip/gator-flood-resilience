import { Link, useParams } from 'react-router-dom'
import { getPostBySlug, CATEGORY_LABELS } from '../content/posts'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

const BACK_LINKS = {
  article: { to: '/articles', label: 'All Articles' },
  'built-environment': { to: '/built-environment', label: 'Built Environment' },
  'social-policy': { to: '/social-policy', label: 'Social & Policy' },
}

function formatDate(dateStr) {
  const date = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PostDetail() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div>
        <PageHeader eyebrow="Not Found" title="We couldn't find that post" />
        <Section>
          <Link to="/articles" className="font-semibold text-brand-orange-600 hover:underline">
            &larr; Back to Articles
          </Link>
        </Section>
      </div>
    )
  }

  const backLink = post.type === 'article' ? BACK_LINKS.article : BACK_LINKS[post.section]
  const eyebrow = post.type === 'article' ? CATEGORY_LABELS[post.category] || 'Article' : 'Case Study'

  return (
    <div>
      <PageHeader eyebrow={eyebrow} title={post.title} />

      <Section className="max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-blue-500">
          <span>{formatDate(post.date)}</span>
          {post.author && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>By {post.author}</span>
            </>
          )}
        </div>

        <div className="space-y-4 text-brand-blue-800">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {backLink && (
          <Link to={backLink.to} className="mt-10 inline-block font-semibold text-brand-orange-600 hover:underline">
            &larr; Back to {backLink.label}
          </Link>
        )}
      </Section>
    </div>
  )
}
