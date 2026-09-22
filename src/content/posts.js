// All articles and case studies live here as plain data. To add new
// content: paste the text to Claude, or append a new object to this
// array yourself following the same shape.
//
// type: 'article' | 'case-study'
// section: which page's "Case Studies" section a case-study belongs to
//   ('built-environment' | 'social-policy'), or which category a
//   article is filed under for display — see CATEGORY_LABELS below.
// body: array of paragraph strings (rendered as separate <p> tags).
//   Keep formatting simple — plain paragraphs, no markdown yet.

export const CATEGORY_LABELS = {
  'engineering-explainers': 'Engineering Explainers',
  'social-policy': 'Social & Policy',
  'disaster-prep': 'Disaster Preparedness Guides',
  'research-summaries': 'Research Summaries',
  opinion: 'Opinion Pieces',
  'event-writeups': 'Community Event Write-Ups',
}

export const posts = [
  // Example — delete this once real content is added:
  // {
  //   slug: 'why-elevation-matters',
  //   type: 'article',
  //   category: 'engineering-explainers',
  //   title: 'Why Elevation Matters More Than You Think',
  //   date: '2026-09-20',
  //   author: 'Jane Doe',
  //   summary: 'A one- or two-sentence teaser shown on the article list.',
  //   body: [
  //     'First paragraph of the article.',
  //     'Second paragraph of the article.',
  //   ],
  // },
]

export function getArticles() {
  return posts
    .filter((p) => p.type === 'article')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getCaseStudies(section) {
  return posts
    .filter((p) => p.type === 'case-study' && p.section === section)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}
