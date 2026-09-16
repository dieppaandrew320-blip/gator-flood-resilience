import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

const CATEGORIES = [
  'Engineering Explainers',
  'Social & Policy',
  'Disaster Preparedness Guides',
  'Research Summaries',
  'Opinion Pieces',
  'Community Event Write-Ups',
]

export default function Articles() {
  return (
    <div>
      <PageHeader eyebrow="All Teams" title="Articles" description="Explainers, research, and stories from across the organization." />

      <Section title="Browse by Category">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-full border border-brand-blue-200 px-4 py-1.5 text-sm font-medium text-brand-blue-700"
            >
              {category}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Archive" subtitle="Articles will appear here as they're published." className="bg-brand-blue-50/40">
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
      </Section>
    </div>
  )
}
