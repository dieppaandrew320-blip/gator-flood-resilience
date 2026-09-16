import { Link } from 'react-router-dom'
import { InstagramIcon } from './Header'

const QUICK_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/maps-data', label: 'Maps & Data' },
  { to: '/articles', label: 'Articles' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/resources', label: 'Resources' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900 text-brand-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
              <span className="text-base font-bold text-white">Gator Flood Resilience</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-brand-blue-300">
              A student-led, community-focused initiative improving flood resilience and disaster preparedness across
              South Florida and the Caribbean.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Quick links</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-brand-blue-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h2>
            <a
              href="https://www.instagram.com/gatorfloodresilience/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-brand-blue-300 hover:text-white"
            >
              <InstagramIcon />
              @gatorfloodresilience
            </a>
            <div className="mt-4">
              <Link
                to="/get-involved"
                className="inline-block rounded-md bg-brand-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-orange-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-brand-blue-700 pt-6 text-xs text-brand-blue-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Gator Flood Resilience, University of Florida.</p>
          <Link to="/admin" className="hover:text-white">
            Member Login
          </Link>
        </div>
      </div>
    </footer>
  )
}
