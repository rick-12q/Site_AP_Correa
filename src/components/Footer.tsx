import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinicConfig } from '../config/clinic'
import { footerConfig } from '../config/footer'
import { navigationConfig } from '../config/navigation'

function Footer() {
  const { contact, address, openingHours } = clinicConfig
  const footer = footerConfig
  const navigation = navigationConfig

  const hasWhatsApp = contact.whatsapp.trim().length > 0
  const hasEmail = contact.email.trim().length > 0

  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
    : ''

  return (
    <footer className="border-t border-[#dfddd6] bg-[#24312c] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:gap-12">
          {/* Clínica */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-white"
            >
              {clinicConfig.name}
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              {footer.description}
            </p>

            {hasWhatsApp && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#bcd0c7]"
              >
                <MessageCircle size={17} />
                {footer.whatsappLabel}
              </a>
            )}
          </div>

          {/* Navegação */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40 sm:text-sm">
              {footer.sections.navigation}
            </p>

            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/65">
              <Link
                to="/"
                className="transition hover:text-white"
              >
                {navigation.labels.home}
              </Link>

              <Link
                to="/clinica"
                className="transition hover:text-white"
              >
                {navigation.labels.clinic}
              </Link>

              <Link
                to="/odontologia"
                className="transition hover:text-white"
              >
                {navigation.labels.dentistry}
              </Link>

              <Link
                to="/terapias"
                className="transition hover:text-white"
              >
                {navigation.labels.therapies}
              </Link>

              <Link
                to="/contato"
                className="transition hover:text-white"
              >
                {navigation.labels.contact}
              </Link>
            </nav>
          </div>

          {/* Localização */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40 sm:text-sm">
              {footer.sections.location}
            </p>

            <div className="mt-4 flex gap-2.5">
              <MapPin
                size={17}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-[#9db9ad]"
              />

              <div className="text-sm leading-6 text-white/65">
                <p>
                  {address.street}, {address.number}
                </p>

                {address.complement && (
                  <p>{address.complement}</p>
                )}

                <p>{address.neighborhood}</p>

                <p>
                  {address.city} — {address.state}
                </p>

                <p>CEP {address.zipCode}</p>
              </div>
            </div>

            {hasEmail && (
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 flex items-start gap-2.5 break-all text-sm text-white/65 transition hover:text-white"
              >
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#9db9ad]"
                />

                {contact.email}
              </a>
            )}
          </div>

          {/* Horários */}
          <div className="col-span-2 border-t border-white/10 pt-8 md:col-span-1 md:border-0 md:pt-0 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40 sm:text-sm">
              {footer.sections.openingHours}
            </p>

            <div className="mt-4 flex gap-3">
              <Clock3
                size={18}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-[#9db9ad]"
              />

              <div className="grid flex-1 gap-x-8 gap-y-4 text-sm leading-6 text-white/65 sm:grid-cols-3 md:grid-cols-1">
                <div>
                  <p className="font-medium text-white/85">
                    {openingHours.weekdays.label}
                  </p>

                  <p>{openingHours.weekdays.hours}</p>
                </div>

                <div>
                  <p className="font-medium text-white/85">
                    {openingHours.saturday.label}
                  </p>

                  <p>{openingHours.saturday.hours}</p>
                </div>

                <div>
                  <p className="font-medium text-white/85">
                    {openingHours.sunday.label}
                  </p>

                  <p>{openingHours.sunday.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinicConfig.name}.{' '}
            {footer.copyright.suffix}
          </p>

          <p>
            {address.city} — {address.state}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer