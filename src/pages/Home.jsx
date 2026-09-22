import { Link } from 'react-router-dom'
import { InstagramIcon } from '../components/Header'
import Section from '../components/Section'
import { getArticles, CATEGORY_LABELS } from '../content/posts'

const WHAT_WE_DO = [
  {
    to: '/built-environment',
    title: 'Built Environment',
    description: 'Engineering and construction literacy — foundations, elevation, drainage, and resilient infrastructure.',
    color: 'bg-brand-orange-50 text-brand-orange-600',
  },
  {
    to: '/social-policy',
    title: 'Social & Policy',
    description: 'Disaster preparedness, housing equity, and policy explainers for low-income and high-risk communities.',
    color: 'bg-brand-blue-50 text-brand-blue-700',
  },
  {
    to: '/maps-data',
    title: 'Maps & Data',
    description: 'GIS mapping of flood risk and income across Miami-Dade, Broward, and Palm Beach counties.',
    color: 'bg-brand-orange-50 text-brand-orange-600',
  },
]

export default function Home() {
  const latestArticles = getArticles().slice(0, 3)

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-blue-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 md:py-24">
          <img src="/logo.png" alt="Gator Flood Resilience" className="h-40 w-40 object-contain sm:h-48 sm:w-48" />
          <div>
            <h1 className="text-3xl font-bold text-brand-blue-900 sm:text-5xl">Gator Flood Resilience</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-blue-700">
              Building safer, stronger, and more resilient coastal communities — together.
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-brand-blue-700">
            We're a student-led, community-focused initiative dedicated to improving flood resilience, disaster
            preparedness, and infrastructure awareness in low-income and high-risk coastal communities across South
            Florida and the Caribbean.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/get-involved"
              className="rounded-md bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange-600"
            >
              Join Us
            </Link>
            <Link
              to="/get-involved"
              className="rounded-md border border-brand-blue-300 px-6 py-3 text-sm font-semibold text-brand-blue-700 hover:bg-brand-blue-50"
            >
              Contact Us
            </Link>
            <a
              href="https://www.instagram.com/gatorfloodresilience/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-brand-blue-700 hover:bg-brand-blue-50"
            >
              <InstagramIcon />
              Follow along
            </a>
          </div>
        </div>
      </section>

      <Section title="What We Do" subtitle="Three teams, one mission: resilience built together.">
        <div className="grid gap-6 sm:grid-cols-3">
          {WHAT_WE_DO.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-xl border border-brand-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${item.color}`}>
                {item.title[0]}
              </span>
              <h3 className="mt-4 font-semibold text-brand-blue-900 group-hover:text-brand-orange-600">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-blue-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Flood Risk & Income Map"
        subtitle="Our GIS team maps flood-risk overlap with income across three South Florida counties."
      >
        <Link
          to="/maps-data"
          className="group flex flex-col items-center justify-between gap-6 rounded-xl border border-brand-blue-100 bg-gradient-to-r from-brand-blue-700 to-brand-blue-900 p-8 text-white sm:flex-row"
        >
          <div>
            <h3 className="text-xl font-bold">Miami-Dade &middot; Broward &middot; Palm Beach</h3>
            <p className="mt-2 max-w-lg text-brand-blue-100">
              Explore where flood hazard zones and low-income communities overlap, and see the emergency resources
              available nearby.
            </p>
          </div>
          <span className="shrink-0 rounded-md bg-brand-orange-500 px-5 py-2.5 text-sm font-semibold group-hover:bg-brand-orange-600">
            View the Map &rarr;
          </span>
        </Link>
      </Section>

      <Section title="Latest Articles" subtitle="Research summaries, guides, and stories from our teams.">
        <div className="grid gap-6 sm:grid-cols-3">
          {latestArticles.length === 0
            ? [1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl border border-dashed border-brand-blue-200 bg-brand-blue-50/50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-600">Coming Soon</p>
                  <p className="mt-2 text-sm text-brand-blue-600">
                    Articles from our Built Environment, Social &amp; Policy, and Maps &amp; Data teams will appear here.
                  </p>
                </div>
              ))
            : latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="group overflow-hidden rounded-xl border border-brand-blue-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {article.image ? (
                    <img
                      src={article.image.url}
                      alt={article.image.alt || ''}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center bg-brand-blue-50 text-xs font-medium text-brand-blue-300">
                      No image yet
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-600">
                      {CATEGORY_LABELS[article.category] || 'Article'}
                    </p>
                    <h3 className="mt-2 font-semibold text-brand-blue-900 group-hover:text-brand-orange-600">{article.title}</h3>
                    {article.summary && <p className="mt-2 text-sm text-brand-blue-600">{article.summary}</p>}
                  </div>
                </Link>
              ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/articles" className="text-sm font-semibold text-brand-blue-700 hover:text-brand-orange-600">
            View all articles &rarr;
          </Link>
        </div>
      </Section>

      <section className="bg-brand-orange-50">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-brand-blue-900">Want to help build resilient communities?</h2>
          <p className="mt-2 text-brand-blue-700">
            Students from every discipline are welcome — engineering, policy, GIS, communications, and more.
          </p>
          <Link
            to="/get-involved"
            className="mt-6 inline-block rounded-md bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange-600"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  )
}
