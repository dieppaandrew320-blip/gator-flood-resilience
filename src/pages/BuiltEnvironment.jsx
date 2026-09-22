import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'
import CaseStudyList from '../components/CaseStudyList'
import ExplainerGrid from '../components/ExplainerGrid'

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
        <ExplainerGrid group="basics" />
      </Section>

      <Section title="Infrastructure Explainers" subtitle="How community-scale infrastructure protects us." className="bg-brand-blue-50/40">
        <ExplainerGrid group="infrastructure" />
      </Section>

      <Section title="Diagrams & Visuals">
        <ComingSoon>Illustrated diagrams of resilient building and infrastructure design.</ComingSoon>
      </Section>

      <Section title="Case Studies" subtitle="Real examples of resilient structures." className="bg-brand-blue-50/40">
        <CaseStudyList section="built-environment" />
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
