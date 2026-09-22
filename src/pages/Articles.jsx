import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ArticleRow from '../components/ArticleRow'
import { getArticles, CATEGORY_LABELS } from '../content/posts'

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

      <Section title="Archive" maxWidth="max-w-3xl" className="bg-brand-blue-50/40">
        {visibleArticles.length === 0 ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-5 border-b border-brand-blue-100 py-6 last:border-b-0 sm:flex-row">
                <div className="aspect-[4/3] rounded-lg bg-brand-blue-100 sm:w-64 sm:shrink-0" />
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-600">Coming Soon</p>
                  <div className="h-5 w-2/3 rounded bg-brand-blue-100" />
                  <div className="h-3 w-full rounded bg-brand-blue-50" />
                  <div className="h-3 w-5/6 rounded bg-brand-blue-50" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {visibleArticles.map((article) => (
              <ArticleRow key={article.slug} post={article} />
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
