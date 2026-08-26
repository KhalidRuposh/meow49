import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Home from './pages/Home.jsx'
import Works from './pages/Works.jsx'
import WorkDetail from './pages/WorkDetail.jsx'
import Blog from './pages/Blog.jsx'
import PostDetail from './pages/PostDetail.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cursor />
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
