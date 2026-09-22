import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { getArticles, CATEGORY_LABELS } from '../content/posts'

function formatDate(dateStr) {
  const date = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState(null)
  const articles = getArticles()
  const visibleArticles = activeCategory ? articles.filter((a) => a.category === activeCategory) : articles

  return (
    <div>
      <PageHeader eyebrow="All Teams" title="Articles" description="Explainers, research, and stories from across the organization." />

      <Section title="Browse by Category">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
              activeCategory === null
                ? 'border-transparent bg-brand-orange-500 text-white'
                : 'border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-50'
            }`}
          >
            All
          </button>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              aria-pressed={activeCategory === key}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                activeCategory === key
                  ? 'border-transparent bg-brand-orange-500 text-white'
                  : 'border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Archive" className="bg-brand-blue-50/40">
        {visibleArticles.length === 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl border border-dashed border-brand-blue-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-600">Coming Soon</p>
                <div className="mt-3 h-4 w-3/4 rounded bg-brand-blue-100" />
                <div className="mt-2 h-3 w-full rounded bg-brand-blue-50" />
                <div className="mt-1 h-3 w-5/6 rounded bg-brand-blue-50" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="rounded-xl border border-brand-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-600">
                  {CATEGORY_LABELS[article.category] || 'Article'}
                </p>
                <h3 className="mt-2 font-semibold text-brand-blue-900">{article.title}</h3>
                {article.summary && <p className="mt-2 text-sm text-brand-blue-600">{article.summary}</p>}
                <p className="mt-3 text-xs text-brand-blue-400">{formatDate(article.date)}</p>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
