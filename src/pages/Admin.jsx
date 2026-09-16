import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ComingSoon from '../components/ComingSoon'

export default function Admin() {
  return (
    <div>
      <PageHeader eyebrow="Members Only" title="Admin" description="Internal tools for club officers and members." />

      <Section>
        <div className="rounded-lg border border-brand-orange-200 bg-brand-orange-50 p-4 text-sm text-brand-orange-700">
          <strong>Note:</strong> this page isn't password-protected yet — anyone with the link can view it. Don't post
          sensitive information here until real member authentication is added (e.g. Netlify Identity, or just move
          this content to a private Google Drive/Notion and link it from here instead).
        </div>
      </Section>

      <Section title="Meeting Notes" className="bg-brand-blue-50/40">
        <ComingSoon />
      </Section>
      <Section title="Project Trackers">
        <ComingSoon />
      </Section>
      <Section title="Content Submission Portal" className="bg-brand-blue-50/40">
        <ComingSoon>Members will be able to submit articles and media for review here.</ComingSoon>
      </Section>
      <Section title="Team Assignments">
        <ComingSoon />
      </Section>
      <Section title="Semester Goals" className="bg-brand-blue-50/40">
        <ComingSoon />
      </Section>
    </div>
  )
}
