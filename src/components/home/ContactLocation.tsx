import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinicConfig } from '../../config/clinic'
import { homeConfig } from '../../config/home'

function ContactLocation() {
  const { contact, address, openingHours, maps } = clinicConfig
  const { contactLocation } = homeConfig

  const hasWhatsApp = contact.whatsapp.trim().length > 0
  const hasEmail = contact.email.trim().length > 0

  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
    : ''

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-[#dfddd6] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#f7f5f0] p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {contactLocation.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl">
              {contactLocation.title}

              <span className="block text-[#68736e]">
                {address.city}.
              </span>
            </h2>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                  <MapPin
                    size={18}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#24312c]">
                    {contactLocation.labels.location}
                  </p>

                  <div className="mt-1 text-sm leading-6 text-[#68736e]">
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

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                  <Clock3
                    size={18}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#24312c]">
                    {contactLocation.labels.openingHours}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#68736e]">
                    {openingHours.weekdays.label}
                    <br />
                    {openingHours.weekdays.hours}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#68736e]">
                    {openingHours.saturday.label}
                    <br />
                    {openingHours.saturday.hours}
                  </p>
                </div>
              </div>

              {hasEmail && (
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <Mail
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-[#24312c]">
                      {contactLocation.labels.email}
                    </p>

                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block text-sm leading-6 text-[#68736e] transition hover:text-[#315c4f]"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {hasWhatsApp && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#315c4f] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#23463c]"
                >
                  <MessageCircle size={17} />
                  {contactLocation.buttons.whatsapp}
                </a>
              )}

              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-full border border-[#315c4f] px-5 py-3 text-sm font-semibold text-[#315c4f] transition hover:bg-[#dfe9e4]"
              >
                {contactLocation.buttons.contact}
              </Link>
            </div>
          </div>

          <div className="min-h-[420px] bg-[#e7e2d8] lg:min-h-full">
            <iframe
              src={maps.embedUrl}
              title={`Localização da ${clinicConfig.name}`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[420px] w-full border-0 lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocation