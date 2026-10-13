import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { clinicConfig } from '../config/clinic'
import { navigationConfig } from '../config/navigation'
import { getTreatmentsByCategory } from '../config/treatments'
import AppointmentButton from './AppointmentButton'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const [mobileSection, setMobileSection] = useState<
    'odontologia' | 'terapias' | null
  >(null)

  const location = useLocation()
  const navigation = navigationConfig

  const dentistryTreatments =
    getTreatmentsByCategory('odontologia')

  const therapyTreatments =
    getTreatmentsByCategory('terapias')

  const odontologiaLinks = [
    {
      label: navigation.labels.overview,
      to: '/odontologia',
    },
    ...dentistryTreatments.map((treatment) => ({
      label: treatment.title,
      to: treatment.href,
    })),
  ]

  const terapiasLinks = [
    {
      label: navigation.labels.overview,
      to: '/terapias',
    },
    ...therapyTreatments.map((treatment) => ({
      label: treatment.title,
      to: treatment.href,
    })),
  ]

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileSection(null)
  }

  const toggleMobileSection = (
    section: 'odontologia' | 'terapias',
  ) => {
    setMobileSection((current) =>
      current === section ? null : section,
    )
  }

  useEffect(() => {
    closeMobileMenu()
  }, [location.pathname])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileOpen])

  const isHome = location.pathname === '/'

  const isClinica =
    location.pathname.startsWith('/clinica')

  const isOdontologia =
    location.pathname.startsWith('/odontologia')

  const isTerapias =
    location.pathname.startsWith('/terapias')

  const isContato =
    location.pathname.startsWith('/contato')

  const desktopLinkClass = (active: boolean) =>
    `text-sm font-medium transition ${
      active
        ? 'text-[#315c4f]'
        : 'text-[#4f5b54] hover:text-[#2f5d50]'
    }`

  const mobileLinkClass = (active: boolean) =>
    `flex min-h-12 items-center border-b border-[#e5e1d8] text-[15px] font-medium transition ${
      active
        ? 'text-[#315c4f]'
        : 'text-[#3f4b45]'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e5e1d8] bg-[#f8f6f1]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="relative z-10 text-[17px] font-semibold tracking-tight text-[#2f3a35] sm:text-lg"
          >
            {clinicConfig.name}
          </Link>

          {/* DESKTOP */}

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              className={desktopLinkClass(isHome)}
            >
              <span
                className={
                  isHome
                    ? 'border-b-2 border-[#315c4f] pb-1.5'
                    : 'pb-1.5'
                }
              >
                {navigation.labels.home}
              </span>
            </Link>

            <Link
              to="/clinica"
              className={desktopLinkClass(isClinica)}
            >
              <span
                className={
                  isClinica
                    ? 'border-b-2 border-[#315c4f] pb-1.5'
                    : 'pb-1.5'
                }
              >
                {navigation.labels.clinic}
              </span>
            </Link>

            <div className="group relative">
              <Link
                to="/odontologia"
                className={`flex items-center gap-1 text-sm font-medium transition ${
                  isOdontologia
                    ? 'text-[#315c4f]'
                    : 'text-[#4f5b54] hover:text-[#2f5d50]'
                }`}
              >
                <span
                  className={
                    isOdontologia
                      ? 'border-b-2 border-[#315c4f] pb-1.5'
                      : 'pb-1.5'
                  }
                >
                  {navigation.labels.dentistry}
                </span>

                <ChevronDown size={15} />
              </Link>

              <div className="invisible absolute left-0 top-full w-60 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-[#e5e1d8] bg-white p-2 shadow-[0_18px_50px_rgba(36,49,44,0.12)]">
                  {odontologiaLinks.map((link) => {
                    const active =
                      location.pathname === link.to

                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block rounded-xl px-4 py-2.5 text-sm transition ${
                          active
                            ? 'bg-[#dfe9e4] font-semibold text-[#315c4f]'
                            : 'text-[#4f5b54] hover:bg-[#f3f1eb] hover:text-[#2f5d50]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                to="/terapias"
                className={`flex items-center gap-1 text-sm font-medium transition ${
                  isTerapias
                    ? 'text-[#315c4f]'
                    : 'text-[#4f5b54] hover:text-[#2f5d50]'
                }`}
              >
                <span
                  className={
                    isTerapias
                      ? 'border-b-2 border-[#315c4f] pb-1.5'
                      : 'pb-1.5'
                  }
                >
                  {navigation.labels.therapies}
                </span>

                <ChevronDown size={15} />
              </Link>

              <div className="invisible absolute left-0 top-full w-60 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-[#e5e1d8] bg-white p-2 shadow-[0_18px_50px_rgba(36,49,44,0.12)]">
                  {terapiasLinks.map((link) => {
                    const active =
                      location.pathname === link.to

                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block rounded-xl px-4 py-2.5 text-sm transition ${
                          active
                            ? 'bg-[#dfe9e4] font-semibold text-[#315c4f]'
                            : 'text-[#4f5b54] hover:bg-[#f3f1eb] hover:text-[#2f5d50]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <Link
              to="/contato"
              className={desktopLinkClass(isContato)}
            >
              <span
                className={
                  isContato
                    ? 'border-b-2 border-[#315c4f] pb-1.5'
                    : 'pb-1.5'
                }
              >
                {navigation.labels.contact}
              </span>
            </Link>

            <AppointmentButton className="motion-button rounded-full bg-[#2f5d50] px-5 py-2.5 text-sm font-medium !text-white hover:bg-[#24493e]">
              {navigation.appointment.desktopLabel}
            </AppointmentButton>
          </nav>

          {/* BOTÃO MOBILE */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? navigation.mobileMenu.closeLabel
                : navigation.mobileMenu.openLabel
            }
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((open) => !open)

              if (mobileOpen) {
                setMobileSection(null)
              }
            }}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#dfddd6] bg-white/70 text-[#2f3a35] transition active:scale-[0.96] lg:hidden"
          >
            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen
                  ? 'rotate-90 scale-75 opacity-0'
                  : 'rotate-0 scale-100 opacity-100'
              }`}
            >
              <Menu size={20} strokeWidth={1.8} />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen
                  ? 'rotate-0 scale-100 opacity-100'
                  : '-rotate-90 scale-75 opacity-0'
              }`}
            >
              <X size={20} strokeWidth={1.8} />
            </span>
          </button>
        </div>

        {/* MENU MOBILE */}

        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-t border-[#e5e1d8] bg-[#f8f6f1] shadow-[0_20px_45px_rgba(36,49,44,0.10)] transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${
            mobileOpen
              ? 'max-h-[calc(100vh-4rem)] translate-y-0 opacity-100'
              : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 pb-6 pt-3 sm:px-8">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isHome)}
            >
              {navigation.labels.home}
            </Link>

            <Link
              to="/clinica"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isClinica)}
            >
              {navigation.labels.clinic}
            </Link>

            {/* ODONTOLOGIA */}

            <button
              type="button"
              onClick={() =>
                toggleMobileSection('odontologia')
              }
              className={`flex min-h-12 w-full items-center justify-between border-b border-[#e5e1d8] text-left text-[15px] font-medium ${
                isOdontologia
                  ? 'text-[#315c4f]'
                  : 'text-[#3f4b45]'
              }`}
            >
              {navigation.labels.dentistry}

              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  mobileSection === 'odontologia'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                mobileSection === 'odontologia'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-b border-[#e5e1d8] bg-white/45 px-4 py-2">
                  {odontologiaLinks.map((link) => {
                    const active =
                      location.pathname === link.to

                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={closeMobileMenu}
                        className={`flex min-h-11 items-center border-b border-[#e5e1d8]/60 text-sm last:border-0 ${
                          active
                            ? 'font-semibold text-[#315c4f]'
                            : 'text-[#66716b]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* TERAPIAS */}

            <button
              type="button"
              onClick={() =>
                toggleMobileSection('terapias')
              }
              className={`flex min-h-12 w-full items-center justify-between border-b border-[#e5e1d8] text-left text-[15px] font-medium ${
                isTerapias
                  ? 'text-[#315c4f]'
                  : 'text-[#3f4b45]'
              }`}
            >
              {navigation.labels.therapies}

              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  mobileSection === 'terapias'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                mobileSection === 'terapias'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-b border-[#e5e1d8] bg-white/45 px-4 py-2">
                  {terapiasLinks.map((link) => {
                    const active =
                      location.pathname === link.to

                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={closeMobileMenu}
                        className={`flex min-h-11 items-center border-b border-[#e5e1d8]/60 text-sm last:border-0 ${
                          active
                            ? 'font-semibold text-[#315c4f]'
                            : 'text-[#66716b]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <Link
              to="/contato"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isContato)}
            >
              {navigation.labels.contact}
            </Link>

            <div className="pt-5">
              <AppointmentButton className="motion-button flex min-h-12 w-full items-center justify-center rounded-full bg-[#2f5d50] px-5 text-center text-sm font-semibold !text-white active:scale-[0.99]">
                {navigation.appointment.mobileLabel}
              </AppointmentButton>
            </div>
          </nav>
        </div>
      </header>

      {/* FUNDO DO MENU MOBILE */}

      <button
        type="button"
        aria-label={navigation.mobileMenu.closeLabel}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-40 bg-[#24312c]/15 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />
    </>
  )
}

export default Header