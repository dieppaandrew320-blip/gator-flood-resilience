import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="About Us" title="Resilience, built together" />

      <Section>
        <div className="space-y-5 text-brand-blue-800">
          <p>
            Our organization is a student-led, community-focused initiative dedicated to improving flood resilience,
            disaster preparedness, and infrastructure awareness in low-income and high-risk coastal communities
            across South Florida and the Caribbean. We work as a collaborative team — students, local residents, and
            partner organizations — committed to reducing hurricane-related damage and saving lives through
            accessible education and practical resilience strategies.
          </p>
          <p>
            As a group, we research vulnerable neighborhoods, identify gaps in public knowledge, and develop clear,
            culturally relevant educational materials that explain how flooding works, how infrastructure protects
            communities, and what families can do before, during, and after major storms. Our members contribute
            through mapping projects, outreach events, engineering and construction literacy workshops, and
            partnerships with local leaders who understand the needs of their communities.
          </p>
          <p>
            This club operates on the belief that resilience is built together. Every project is a collective
            effort: students collaborate across disciplines, community members share lived experience, and
            volunteers help deliver resources where they are needed most. By combining academic knowledge with
            on-the-ground engagement, we aim to empower at-risk communities with the tools, information, and
            confidence to prepare for future storms and adapt to a changing climate.
          </p>
          <p>
            Our long-term vision is to expand beyond South Florida, supporting additional coastal regions facing
            rising flood risk. Through teamwork, education, and sustained community partnership, we strive to create
            safer, stronger, and more resilient futures for all.
          </p>
        </div>
      </Section>

      <Section
        title="Why Resilience & Equity Matter"
        subtitle="Flood risk isn't distributed equally — and neither is the ability to recover from it."
        className="bg-brand-blue-50/40"
      >
        <p className="text-brand-blue-800">
          Low-income and historically underserved coastal neighborhoods often face the highest flood risk with the
          fewest resources to prepare, respond, and rebuild. We focus our work where the gap between risk and
          readiness is greatest.
        </p>
      </Section>

      <Section title="Our Interdisciplinary Approach" subtitle="Every discipline has a role in resilience.">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/built-environment" className="rounded-lg border border-brand-blue-100 p-5 hover:shadow-md">
            <h3 className="font-semibold text-brand-blue-900">Built Environment</h3>
            <p className="mt-1 text-sm text-brand-blue-600">Engineering & Construction Management</p>
          </Link>
          <Link to="/social-policy" className="rounded-lg border border-brand-blue-100 p-5 hover:shadow-md">
            <h3 className="font-semibold text-brand-blue-900">Social & Policy</h3>
            <p className="mt-1 text-sm text-brand-blue-600">Political Science, IR, Sociology, Geography</p>
          </Link>
          <Link to="/maps-data" className="rounded-lg border border-brand-blue-100 p-5 hover:shadow-md">
            <h3 className="font-semibold text-brand-blue-900">Maps & Data</h3>
            <p className="mt-1 text-sm text-brand-blue-600">GIS, Computer Science, Statistics</p>
          </Link>
        </div>
      </Section>

      <Section title="Leadership Team" className="bg-brand-blue-50/40">
        <ComingSoon>Officer bios and photos will be added here.</ComingSoon>
      </Section>

      <Section title="How to Join">
        <p className="text-brand-blue-800">
          We welcome students from every major and background. Visit the{' '}
          <Link to="/get-involved" className="font-semibold text-brand-orange-600 hover:underline">
            Get Involved
          </Link>{' '}
          page for team descriptions, meeting info, and how to sign up.
        </p>
      </Section>

      <Section title="Partner Organizations" className="bg-brand-blue-50/40">
        <ComingSoon>Community and agency partners will be listed here as partnerships are formalized.</ComingSoon>
      </Section>
    </div>
  )
}
