import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const odontologiaLinks = [
  { label: 'Visão geral', to: '/odontologia' },
  { label: 'Limpeza', to: '/odontologia/limpeza' },
  { label: 'Restauração', to: '/odontologia/restauracao' },
  { label: 'Tratamento de canal', to: '/odontologia/canal' },
  { label: 'Coroa', to: '/odontologia/coroa' },
  { label: 'Ortodontia', to: '/odontologia/ortodontia' },
]

const terapiasLinks = [
  { label: 'Visão geral', to: '/terapias' },
  { label: 'Reiki', to: '/terapias/reiki' },
  { label: 'Acupuntura', to: '/terapias/acupuntura' },
  { label: 'Auriculoterapia', to: '/terapias/auriculoterapia' },
  { label: 'Moxabustão', to: '/terapias/moxabustao' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<
    'odontologia' | 'terapias' | null
  >(null)

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileSection(null)
  }

  const toggleMobileSection = (
    section: 'odontologia' | 'terapias',
  ) => {
    setMobileSection((current) => (current === section ? null : section))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e1d8] bg-[#f8f6f1]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-lg font-semibold tracking-tight text-[#2f3a35]"
        >
          Clínica AP Corrêa
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-[#4f5b54] transition hover:text-[#2f5d50]"
          >
            Início
          </Link>

          <Link
            to="/clinica"
            className="text-sm font-medium text-[#4f5b54] transition hover:text-[#2f5d50]"
          >
            Clínica
          </Link>

          <div className="group relative">
            <Link
              to="/odontologia"
              className="flex items-center gap-1 text-sm font-medium text-[#4f5b54] transition hover:text-[#2f5d50]"
            >
              Odontologia
              <ChevronDown size={15} />
            </Link>

            <div className="invisible absolute left-0 top-full w-60 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-[#e5e1d8] bg-white p-2 shadow-lg">
                {odontologiaLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block rounded-xl px-4 py-2.5 text-sm text-[#4f5b54] transition hover:bg-[#f3f1eb] hover:text-[#2f5d50]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/terapias"
              className="flex items-center gap-1 text-sm font-medium text-[#4f5b54] transition hover:text-[#2f5d50]"
            >
              Terapias
              <ChevronDown size={15} />
            </Link>

            <div className="invisible absolute left-0 top-full w-60 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-[#e5e1d8] bg-white p-2 shadow-lg">
                {terapiasLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block rounded-xl px-4 py-2.5 text-sm text-[#4f5b54] transition hover:bg-[#f3f1eb] hover:text-[#2f5d50]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contato"
            className="text-sm font-medium text-[#4f5b54] transition hover:text-[#2f5d50]"
          >
            Contato
          </Link>

          <Link
            to="/contato"
            className="rounded-full bg-[#2f5d50] px-5 py-2.5 text-sm font-medium !text-white transition hover:bg-[#24493e]"
          >
            Agendar
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-xl p-2 text-[#2f3a35] transition hover:bg-[#ece9e1] lg:hidden"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#e5e1d8] bg-[#f8f6f1] lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="border-b border-[#e5e1d8] py-3.5 text-sm font-medium text-[#3f4b45]"
              >
                Início
              </Link>

              <Link
                to="/clinica"
                onClick={closeMobileMenu}
                className="border-b border-[#e5e1d8] py-3.5 text-sm font-medium text-[#3f4b45]"
              >
                Clínica
              </Link>

              <button
                type="button"
                onClick={() => toggleMobileSection('odontologia')}
                className="flex items-center justify-between border-b border-[#e5e1d8] py-3.5 text-left text-sm font-medium text-[#3f4b45]"
              >
                Odontologia
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    mobileSection === 'odontologia' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileSection === 'odontologia' && (
                <div className="border-b border-[#e5e1d8] py-2 pl-4">
                  {odontologiaLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMobileMenu}
                      className="block py-2.5 text-sm text-[#66716b]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => toggleMobileSection('terapias')}
                className="flex items-center justify-between border-b border-[#e5e1d8] py-3.5 text-left text-sm font-medium text-[#3f4b45]"
              >
                Terapias
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    mobileSection === 'terapias' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileSection === 'terapias' && (
                <div className="border-b border-[#e5e1d8] py-2 pl-4">
                  {terapiasLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMobileMenu}
                      className="block py-2.5 text-sm text-[#66716b]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/contato"
                onClick={closeMobileMenu}
                className="border-b border-[#e5e1d8] py-3.5 text-sm font-medium text-[#3f4b45]"
              >
                Contato
              </Link>

              <Link
                to="/contato"
                onClick={closeMobileMenu}
                className="mt-5 rounded-full bg-[#2f5d50] px-5 py-3 text-center text-sm font-medium !text-white"
              >
                Agendar atendimento
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header