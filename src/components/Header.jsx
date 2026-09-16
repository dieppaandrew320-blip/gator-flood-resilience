import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/built-environment', label: 'Built Environment' },
  { to: '/social-policy', label: 'Social & Policy' },
  { to: '/maps-data', label: 'Maps & Data' },
  { to: '/articles', label: 'Articles' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/media', label: 'Media' },
  { to: '/resources', label: 'Resources' },
]

function linkClasses({ isActive }) {
  return `whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-brand-orange-50 text-brand-orange-600'
      : 'text-brand-blue-900 hover:bg-brand-blue-50 hover:text-brand-blue-700'
  }`
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Gator Flood Resilience logo" className="h-12 w-12 object-contain" />
          <span className="hidden text-lg font-bold leading-tight text-brand-blue-900 sm:block">
            Gator Flood
            <br />
            Resilience
          </span>
        </NavLink>

        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/gatorfloodresilience/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md p-2 text-brand-blue-700 hover:bg-brand-blue-50 sm:inline-flex"
            aria-label="Gator Flood Resilience on Instagram"
          >
            <InstagramIcon />
          </a>
          <NavLink
            to="/get-involved"
            className="hidden rounded-md bg-brand-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange-600 sm:inline-block"
          >
            Join Us
          </NavLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="rounded-md p-2 text-brand-blue-900 hover:bg-brand-blue-50 lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-brand-blue-100 bg-white px-4 py-3 lg:hidden" aria-label="Primary">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClasses} onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.instagram.com/gatorfloodresilience/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2 text-sm font-medium text-brand-blue-900 hover:bg-brand-blue-50"
            >
              Instagram
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function InstagramIcon({ className = '' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}
