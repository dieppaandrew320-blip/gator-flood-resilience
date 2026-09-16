import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

export default function BuiltEnvironment() {
  return (
    <div>
      <PageHeader
        eyebrow="Engineering & Construction Management"
        title="Built Environment"
        description="How to build a building for flood resilience."
      />

      <Section
        title="The Basics"
        subtitle="Foundations, elevation, drainage, and materials — the fundamentals of flood-resilient construction."
      >
        <ComingSoon>Explainers on foundations, elevation requirements, drainage design, and resilient materials.</ComingSoon>
      </Section>

      <Section title="Infrastructure Explainers" subtitle="How community-scale infrastructure protects us." className="bg-brand-blue-50/40">
        <div className="grid gap-4 sm:grid-cols-3">
          {['Levees', 'Pump Stations', 'Retention Systems'].map((topic) => (
            <div key={topic} className="rounded-lg border border-dashed border-brand-blue-200 p-5 text-center">
              <p className="font-semibold text-brand-blue-900">{topic}</p>
              <p className="mt-1 text-sm text-brand-blue-500">Explainer coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Diagrams & Visuals">
        <ComingSoon>Illustrated diagrams of resilient building and infrastructure design.</ComingSoon>
      </Section>

      <Section title="Case Studies" subtitle="Real examples of resilient structures." className="bg-brand-blue-50/40">
        <ComingSoon>Case studies of flood-resilient buildings and infrastructure will be featured here.</ComingSoon>
      </Section>

      <Section title="Coming Later">
        <ul className="list-inside list-disc space-y-1 text-brand-blue-700">
          <li>Video explainers</li>
          <li>Step-by-step resilience guides</li>
        </ul>
      </Section>
    </div>
  )
}
