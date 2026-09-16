export default function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`mx-auto max-w-5xl px-4 py-12 sm:px-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold text-brand-blue-900">{title}</h2>}
      {subtitle && <p className="mt-2 max-w-2xl text-brand-blue-600">{subtitle}</p>}
      <div className={title || subtitle ? 'mt-6' : ''}>{children}</div>
    </section>
  )
}
