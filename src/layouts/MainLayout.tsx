import type { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#2f3a35]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout