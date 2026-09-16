import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

const TEAMS = [
  { name: 'Built Environment', description: 'Engineering & construction management — resilient design and infrastructure.' },
  { name: 'Social & Policy', description: 'Political science, IR, sociology & geography — equity, policy, and community outreach.' },
  { name: 'Maps & Data', description: 'GIS, computer science & statistics — mapping flood risk and building the data behind our work.' },
  { name: 'Communications', description: 'Content, design, and social media — telling the story of our work.' },
]

const CONTACT_EMAIL = 'gatorfloodresilience@ufl.edu'

export default function GetInvolved() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Gator Flood Resilience — message from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <PageHeader eyebrow="Join Us" title="Get Involved" description="Students from every discipline are welcome." />

      <Section title="Our Teams">
        <div className="grid gap-4 sm:grid-cols-2">
          {TEAMS.map((team) => (
            <div key={team.name} className="rounded-lg border border-brand-blue-100 p-5">
              <h3 className="font-semibold text-brand-blue-900">{team.name}</h3>
              <p className="mt-1 text-sm text-brand-blue-600">{team.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Volunteer Opportunities" className="bg-brand-blue-50/40">
        <ComingSoon>Upcoming volunteer opportunities and outreach events will be posted here.</ComingSoon>
      </Section>

      <Section title="Workshop Sign-Ups">
        <ComingSoon>Sign-ups for upcoming workshops will open here.</ComingSoon>
      </Section>

      <Section title="Contact Us" className="bg-brand-blue-50/40">
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-blue-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-brand-blue-200 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-blue-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-brand-blue-200 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-blue-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-brand-blue-200 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-brand-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange-600"
          >
            Send Message
          </button>
          <p className="text-xs text-brand-blue-500">
            Opens your email client addressed to {CONTACT_EMAIL}. Update this address in GetInvolved.jsx once the
            club's official email is set up.
          </p>
        </form>
      </Section>

      <Section title="Newsletter">
        <ComingSoon>Sign up for our newsletter — coming soon.</ComingSoon>
      </Section>
    </div>
  )
}
