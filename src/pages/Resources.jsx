import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

const EXTERNAL_LINKS = [
  { name: 'Ready.gov — Hurricane Preparedness', url: 'https://www.ready.gov/hurricanes' },
  { name: 'FEMA Flood Maps', url: 'https://www.fema.gov/flood-maps' },
  { name: 'NOAA National Hurricane Center', url: 'https://www.nhc.noaa.gov/' },
  { name: 'Miami-Dade Emergency Management', url: 'https://www.miamidade.gov/emergency' },
  { name: 'Broward Emergency Management', url: 'https://www.broward.org/Emergency' },
  { name: 'Palm Beach County Division of Emergency Management', url: 'https://discover.pbcgov.org/publicsafety/dem/' },
]

export default function Resources() {
  return (
    <div>
      <PageHeader eyebrow="For the Community" title="Resources" description="Preparedness guides, checklists, and trusted external links." />

      <Section title="Disaster Preparedness Checklists">
        <ComingSoon>Printable hurricane and flood preparedness checklists will be added here.</ComingSoon>
      </Section>

      <Section title="Community Guides" className="bg-brand-blue-50/40">
        <ComingSoon>Plain-language guides on flood risk and what to do before, during, and after a storm.</ComingSoon>
      </Section>

      <Section title="External Links">
        <ul className="grid gap-3 sm:grid-cols-2">
          {EXTERNAL_LINKS.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-brand-blue-100 px-4 py-3 text-sm font-medium text-brand-blue-700 hover:border-brand-orange-300 hover:text-brand-orange-600"
              >
                {link.name} &rarr;
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Printable Materials" className="bg-brand-blue-50/40">
        <ComingSoon>Printable outreach materials will be available for download here.</ComingSoon>
      </Section>

      <Section title="Coming Later">
        <p className="text-brand-blue-700">Multilingual versions of our resources.</p>
      </Section>
    </div>
  )
}
