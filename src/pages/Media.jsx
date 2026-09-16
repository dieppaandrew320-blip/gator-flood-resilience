import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'
import { InstagramIcon } from '../components/Header'

export default function Media() {
  return (
    <div>
      <PageHeader eyebrow="See Our Work" title="Media" description="Photos, videos, and graphics from our events and projects." />

      <Section title="Instagram">
        <a
          href="https://www.instagram.com/gatorfloodresilience/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-brand-orange-500 to-brand-blue-700 p-10 text-center text-white sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <InstagramIcon className="h-10 w-10" />
            <div>
              <p className="text-lg font-bold">@gatorfloodresilience</p>
              <p className="text-sm text-white/80">Follow along for updates, events, and behind-the-scenes work.</p>
            </div>
          </div>
          <span className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue-900">Follow Us</span>
        </a>
        <p className="mt-3 text-xs text-brand-blue-500">
          A live Instagram feed can be embedded here later with a widget like SnapWidget or Elfsight, or via
          Instagram's oEmbed for individual posts.
        </p>
      </Section>

      <Section title="Photo Gallery" className="bg-brand-blue-50/40">
        <ComingSoon>Photos from outreach events and workshops will be added here.</ComingSoon>
      </Section>

      <Section title="Educational Videos">
        <ComingSoon>Short educational videos will be embedded here.</ComingSoon>
      </Section>

      <Section title="Graphics & Infographics" className="bg-brand-blue-50/40">
        <ComingSoon>Infographics explaining flood risk and preparedness will be added here.</ComingSoon>
      </Section>
    </div>
  )
}
