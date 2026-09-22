import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import BuiltEnvironment from './pages/BuiltEnvironment'
import SocialPolicy from './pages/SocialPolicy'
import MapsData from './pages/MapsData'
import Articles from './pages/Articles'
import GetInvolved from './pages/GetInvolved'
import Media from './pages/Media'
import Resources from './pages/Resources'
import Admin from './pages/Admin'
import PostDetail from './pages/PostDetail'

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-brand-blue-900">Page not found</h1>
      <p className="mt-2 text-brand-blue-600">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-brand-orange-600 hover:underline">
        Back to home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/built-environment" element={<BuiltEnvironment />} />
            <Route path="/social-policy" element={<SocialPolicy />} />
            <Route path="/maps-data" element={<MapsData />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<PostDetail />} />
            <Route path="/case-studies/:slug" element={<PostDetail />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/media" element={<Media />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
