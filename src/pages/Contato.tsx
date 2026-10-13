import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import { clinicConfig } from '../config/clinic'
import { contactPageConfig } from '../config/contactPage'

function Contato() {
  const { contact, address, openingHours, maps } = clinicConfig
  const page = contactPageConfig

  const hasWhatsApp = contact.whatsapp.trim().length > 0
  const hasEmail = contact.email.trim().length > 0

  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
    : ''

  const emailUrl = hasEmail
    ? `mailto:${contact.email}`
    : ''

  return (
    <main>
      <section className="bg-[#f7f5f0] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {page.hero.eyebrow}
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#24312c] sm:text-5xl lg:text-6xl">
              {page.hero.title}

              <span className="block text-[#68736e]">
                {page.hero.titleHighlight}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              {page.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-[#dfddd6] bg-[#f7f5f0] p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
              <Clock3 size={21} strokeWidth={1.7} />
            </div>

            <h2 className="mt-7 text-xl font-semibold tracking-tight text-[#24312c]">
              {page.cards.openingHours.title}
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-[#68736e]">
              <div>
                <p className="font-semibold text-[#24312c]">
                  {openingHours.weekdays.label}
                </p>

                <p>{openingHours.weekdays.hours}</p>
              </div>

              <div>
                <p className="font-semibold text-[#24312c]">
                  {openingHours.saturday.label}
                </p>

                <p>{openingHours.saturday.hours}</p>
              </div>

              <div>
                <p className="font-semibold text-[#24312c]">
                  {openingHours.sunday.label}
                </p>

                <p>{openingHours.sunday.hours}</p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[#dfddd6] bg-[#f7f5f0] p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
              <MapPin size={21} strokeWidth={1.7} />
            </div>

            <h2 className="mt-7 text-xl font-semibold tracking-tight text-[#24312c]">
              {page.cards.location.title}
            </h2>

            <div className="mt-4 text-sm leading-6 text-[#68736e]">
              <p>
                {address.street}, {address.number}
              </p>

              {address.complement && (
                <p>{address.complement}</p>
              )}

              <p>
                {address.neighborhood} — {address.city}/{address.state}
              </p>

              <p>CEP {address.zipCode}</p>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[#dfddd6] bg-[#315c4f] p-7 text-white sm:p-8 md:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
              <CalendarDays size={21} strokeWidth={1.7} />
            </div>

            <h2 className="mt-7 text-xl font-semibold tracking-tight">
              {page.cards.appointment.title}
            </h2>

            {hasWhatsApp ? (
              <>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  {page.cards.appointment.availableDescription}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-[#dfe9e4]"
                  style={{ color: '#24312c' }}
                >
                  <MessageCircle size={17} />
                  {page.cards.appointment.whatsappButton}
                </a>
              </>
            ) : (
              <p className="mt-4 text-sm leading-6 text-white/70">
                {page.cards.appointment.unavailableDescription}
              </p>
            )}

            {hasEmail && (
              <a
                href={emailUrl}
                className="mt-4 flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
              >
                <Mail size={16} />
                {contact.email}
              </a>
            )}
          </article>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {page.map.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#24312c] sm:text-4xl">
              {page.map.title}
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#dfddd6] bg-[#e7e2d8]">
            <iframe
              src={maps.embedUrl}
              title={`Localização da ${clinicConfig.name}`}
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#24312c]">
              {clinicConfig.name}
            </p>

            <div className="mt-2 text-sm leading-6 text-[#68736e]">
              <p>
                {address.street}, {address.number}
              </p>

              {address.complement && (
                <p>{address.complement}</p>
              )}

              <p>
                {address.neighborhood} — {address.city}/{address.state}
              </p>

              <p>CEP {address.zipCode}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contato