import { ArrowRight } from 'lucide-react'
import { homeConfig } from '../../config/home'
import AppointmentButton from '../AppointmentButton'

function AppointmentCTA() {
  const { appointmentCTA } = homeConfig

  return (
    <section className="bg-[#315c4f] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
            {appointmentCTA.eyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {appointmentCTA.title}

            <span className="block text-white/55">
              {appointmentCTA.titleHighlight}
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
            {appointmentCTA.description}
          </p>
        </div>

        <AppointmentButton className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-[#dfe9e4]">
          <span style={{ color: '#24312c' }}>
            {appointmentCTA.buttonLabel}
          </span>

          <ArrowRight
            size={17}
            style={{ color: '#24312c' }}
          />
        </AppointmentButton>
      </div>
    </section>
  )
}

export default AppointmentCTA