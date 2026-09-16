import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

// Set VITE_MAP_APP_URL once the Flood & Hurricane Resource Hub is deployed
// (e.g. to Netlify/Vercel) to embed it live on this page.
const MAP_APP_URL = import.meta.env.VITE_MAP_APP_URL

export default function MapsData() {
  return (
    <div>
      <PageHeader
        eyebrow="GIS, Computer Science, Statistics"
        title="Maps & Data"
        description="Three-county flood-risk and income overlap map for South Florida."
      />

      <Section title="Interactive Map" subtitle="Broward · Miami-Dade · Palm Beach">
        {MAP_APP_URL ? (
          <div className="overflow-hidden rounded-xl border border-brand-blue-100 shadow-sm">
            <iframe
              src={MAP_APP_URL}
              title="South Florida Flood & Hurricane Resource Hub"
              className="h-[600px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-xl border border-brand-blue-100 bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 p-10 text-center text-white">
            <h3 className="text-xl font-bold">South Florida Flood & Hurricane Resource Hub</h3>
            <p className="mx-auto mt-2 max-w-lg text-brand-blue-100">
              Our interactive flood-risk, low-income community, and emergency-resource map will be embedded here once
              it's published. In the meantime, view it locally at{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5">http://localhost:5173</code> or the deployed link
              once available.
            </p>
          </div>
        )}
      </Section>

      <Section title="Methodology" className="bg-brand-blue-50/40">
        <div className="space-y-3 text-brand-blue-800">
          <p>
            Flood hazard zones are pulled from FEMA's National Flood Hazard Layer (NFHL), the same data used to
            determine federal flood insurance requirements. Adjacent zones of the same risk category are merged and
            geometry is simplified for fast loading, since this map is for general risk awareness — not a substitute
            for FEMA's official flood determinations.
          </p>
          <p>
            Low-income community data comes from the U.S. Census Bureau: tract boundaries from TIGERweb, joined with
            poverty rate and median household income from the American Community Survey (ACS) 5-year estimates.
          </p>
        </div>
      </Section>

      <Section title="Data Sources">
        <ul className="list-inside list-disc space-y-1 text-brand-blue-700">
          <li>FEMA National Flood Hazard Layer (NFHL)</li>
          <li>U.S. Census Bureau TIGERweb (tract boundaries)</li>
          <li>U.S. Census Bureau American Community Survey (ACS) 5-year estimates</li>
          <li>OpenStreetMap (base map)</li>
        </ul>
      </Section>

      <Section title="What's Next" className="bg-brand-blue-50/40">
        <div className="grid gap-4 sm:grid-cols-2">
          <ComingSoon>Additional regions as the organization expands beyond South Florida.</ComingSoon>
          <ComingSoon>Downloadable PDFs and dashboards summarizing risk by neighborhood.</ComingSoon>
        </div>
      </Section>
    </div>
  )
}
