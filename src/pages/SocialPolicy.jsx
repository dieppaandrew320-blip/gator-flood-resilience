import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

export default function SocialPolicy() {
  return (
    <div>
      <PageHeader
        eyebrow="Political Science, IR, Sociology, Geography"
        title="Social & Policy"
        description="Disaster preparedness and resilience through the lens of equity, housing, and policy."
      />

      <Section title="Disaster Preparedness for Low-Income Communities">
        <ComingSoon>Guides on preparing for hurricanes and flooding with limited resources.</ComingSoon>
      </Section>

      <Section
        title="Inequality, Housing & Vulnerability"
        subtitle="Articles on why flood risk and disaster impact fall unevenly."
        className="bg-brand-blue-50/40"
      >
        <ComingSoon>Articles exploring housing, inequality, and vulnerability to flooding.</ComingSoon>
      </Section>

      <Section title="Policy Explainers">
        <div className="grid gap-4 sm:grid-cols-3">
          {['FEMA Programs', 'Zoning', 'Flood Insurance'].map((topic) => (
            <div key={topic} className="rounded-lg border border-dashed border-brand-blue-200 p-5 text-center">
              <p className="font-semibold text-brand-blue-900">{topic}</p>
              <p className="mt-1 text-sm text-brand-blue-500">Explainer coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Caribbean & South Florida Case Studies" className="bg-brand-blue-50/40">
        <ComingSoon>Regional case studies on flood policy and community impact.</ComingSoon>
      </Section>

      <Section title="Community Stories & Interviews">
        <ComingSoon>Interviews and stories from residents of the communities we work with.</ComingSoon>
      </Section>

      <Section title="Coming Later" className="bg-brand-blue-50/40">
        <ul className="list-inside list-disc space-y-1 text-brand-blue-700">
          <li>Outreach event reports</li>
          <li>Event recaps</li>
        </ul>
      </Section>
    </div>
  )
}
