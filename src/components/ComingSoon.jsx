// Placeholder block for sections that don't have real content yet.
// Keeps the site's structure visible so content can be dropped in later
// without rebuilding pages.
export default function ComingSoon({ children }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-brand-blue-200 bg-brand-blue-50/50 px-6 py-8 text-center text-brand-blue-700">
      <p className="font-medium">Content coming soon</p>
      {children && <p className="mx-auto mt-1 max-w-md text-sm text-brand-blue-600">{children}</p>}
    </div>
  )
}
