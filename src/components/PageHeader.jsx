export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 text-white">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-400">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
        {description && <p className="mx-auto mt-4 max-w-2xl text-brand-blue-100">{description}</p>}
      </div>
    </div>
  )
}
