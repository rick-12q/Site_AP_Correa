import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#2f3a35]">
      <Header />

      <div
        key={location.pathname}
        className="page-transition"
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout