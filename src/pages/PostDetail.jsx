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

function BodyBlock({ block }) {
  if (typeof block === 'string') {
    return <p>{block}</p>
  }
  if (block.type === 'heading') {
    return <h3 className="!mt-8 text-lg font-semibold text-brand-blue-900">{block.text}</h3>
  }
  return null
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
      <PageHeader eyebrow={eyebrow} title={post.title} description={post.kicker} />

      <Section maxWidth="max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-blue-500">
          <span>{formatDate(post.date)}</span>
          {post.author && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>By {post.author}</span>
            </>
          )}
        </div>

        {post.image && (
          <figure className="mb-8">
            <img
              src={post.image.url}
              alt={post.image.alt || ''}
              className="w-full rounded-xl border border-brand-blue-100 object-cover"
              style={{ aspectRatio: '16 / 9' }}
              loading="lazy"
            />
            {post.image.caption && (
              <figcaption className="mt-2 text-sm text-brand-blue-500">{post.image.caption}</figcaption>
            )}
          </figure>
        )}

        <div className="space-y-4 text-brand-blue-800">
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}
        </div>

        {post.takeaway && (
          <div className="mt-6 rounded-r-lg border-l-4 border-brand-blue-500 bg-white p-4 text-brand-blue-900 shadow-sm">
            <strong>Key takeaway:</strong> {post.takeaway}
          </div>
        )}

        {post.references && post.references.length > 0 && (
          <details className="mt-8 border-t border-brand-blue-100 pt-4">
            <summary className="cursor-pointer text-sm font-semibold text-brand-blue-700">
              References ({post.references.length})
            </summary>
            <ul className="mt-3 space-y-2 text-sm text-brand-blue-600">
              {post.references.map((ref, i) => (
                <li key={i} className="pl-6 [text-indent:-1.5rem]">
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noreferrer" className="text-brand-blue-600 hover:text-brand-orange-600 hover:underline">
                      {ref.text}
                    </a>
                  ) : (
                    ref.text
                  )}
                </li>
              ))}
            </ul>
          </details>
        )}

        {backLink && (
          <Link to={backLink.to} className="mt-10 inline-block font-semibold text-brand-orange-600 hover:underline">
            &larr; Back to {backLink.label}
          </Link>
        )}
      </Section>
    </div>
  )
}
