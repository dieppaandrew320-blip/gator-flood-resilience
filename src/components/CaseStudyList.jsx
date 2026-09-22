import { Link } from 'react-router-dom'
import { getCaseStudies } from '../content/posts'
import ComingSoon from './ComingSoon'

export default function CaseStudyList({ section }) {
  const caseStudies = getCaseStudies(section)

  if (caseStudies.length === 0) {
    return <ComingSoon>Case studies will be featured here.</ComingSoon>
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {caseStudies.map((study) => (
        <Link
          key={study.slug}
          to={`/case-studies/${study.slug}`}
          className="rounded-lg border border-brand-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <h3 className="font-semibold text-brand-blue-900">{study.title}</h3>
          {study.summary && <p className="mt-1 text-sm text-brand-blue-600">{study.summary}</p>}
        </Link>
      ))}
    </div>
  )
}
