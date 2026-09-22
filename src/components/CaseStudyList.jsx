import { Link } from 'react-router-dom'
import { getCaseStudies } from '../content/posts'
import ComingSoon from './ComingSoon'

export default function CaseStudyList({ section }) {
  const caseStudies = getCaseStudies(section)

  if (caseStudies.length === 0) {
    return <ComingSoon>Case studies will be featured here.</ComingSoon>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {caseStudies.map((study) => (
        <Link
          key={study.slug}
          to={`/case-studies/${study.slug}`}
          className="group overflow-hidden rounded-lg border border-brand-blue-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {study.image ? (
            <img src={study.image.url} alt={study.image.alt || ''} className="aspect-video w-full object-cover" loading="lazy" />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-brand-blue-50 text-xs font-medium text-brand-blue-300">
              No image yet
            </div>
          )}
          <div className="p-5">
            <h3 className="font-semibold text-brand-blue-900 group-hover:text-brand-orange-600">{study.title}</h3>
            {study.summary && <p className="mt-1 text-sm text-brand-blue-600">{study.summary}</p>}
          </div>
        </Link>
      ))}
    </div>
  )
}
