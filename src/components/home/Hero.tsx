import {
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeConfig } from '../../config/home'
import AppointmentButton from '../AppointmentButton'

function Hero() {
  const { hero } = homeConfig

  const scrollToTreatments = () => {
    document
      .getElementById('tratamentos')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f6f1]">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 pb-12 pt-9 sm:gap-12 sm:px-8 sm:py-12 lg:min-h-[590px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
        {/* CONTEÚDO */}

        <div className="max-w-xl">
          <p className="hero-enter hero-enter-1 mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#315c4f] sm:mb-5 sm:text-sm sm:tracking-[0.18em]">
            {hero.eyebrow}
          </p>

          <h1 className="hero-enter hero-enter-2 max-w-[350px] text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#24312c] sm:max-w-none sm:text-5xl sm:leading-[1.06] sm:tracking-tight lg:text-6xl">
            {hero.title}

            <span className="block text-[#315c4f]">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-4 max-w-[34rem] text-[15px] leading-6 text-[#68736e] sm:mt-6 sm:text-lg sm:leading-7">
            {hero.description}
          </p>

          {/* BOTÕES */}

          <div className="hero-enter hero-enter-4 mt-6 grid grid-cols-1 gap-2.5 min-[430px]:flex min-[430px]:flex-row sm:mt-8 sm:gap-3">
            <button
              type="button"
              onClick={scrollToTreatments}
              className="motion-button flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#315c4f] px-5 text-sm font-semibold !text-white hover:bg-[#23463c] sm:min-h-0 sm:px-6 sm:py-3.5"
            >
              <Stethoscope size={17} />
              {hero.buttons.treatments}
            </button>

            <AppointmentButton className="motion-button flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#315c4f] px-5 text-sm font-semibold text-[#315c4f] hover:bg-[#dfe9e4] sm:min-h-0 sm:px-6 sm:py-3.5">
              <CalendarDays size={17} />
              {hero.buttons.appointment}
            </AppointmentButton>
          </div>

          <Link
            to="/clinica"
            className="hero-enter hero-enter-5 group mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#68736e] transition hover:text-[#315c4f] sm:mt-6 sm:min-h-0"
          >
            {hero.buttons.clinic}

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>

          {/* DESTAQUES */}

          <div className="hero-enter hero-enter-6 mt-5 flex flex-wrap gap-x-2 gap-y-2 border-t border-[#dfddd6] pt-4 sm:mt-8 sm:gap-x-7 sm:gap-y-3 sm:pt-5">
            {hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-medium leading-none text-[#68736e] sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:font-normal sm:leading-normal"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGEM */}

        <div className="hero-image-enter relative pb-10 sm:pb-5">
          <div className="motion-image overflow-hidden rounded-[1.5rem] bg-[#e7e2d8] shadow-[0_18px_45px_rgba(47,58,53,0.10)] sm:rounded-[2rem] sm:shadow-[0_24px_70px_rgba(47,58,53,0.12)]">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-[480px] lg:h-[540px]"
            />
          </div>

          {/* CARD DA IMAGEM */}

          <div className="hero-card-enter absolute bottom-0 left-4 right-4 rounded-2xl border border-[#dfddd6] bg-white/95 px-4 py-3.5 shadow-[0_12px_35px_rgba(47,58,53,0.12)] backdrop-blur sm:-bottom-5 sm:left-8 sm:right-auto sm:max-w-xs sm:p-5 sm:shadow-xl">
            <p className="text-[13px] font-semibold text-[#24312c] sm:text-sm">
              {hero.imageCard.title}
            </p>

            <p className="mt-1 text-xs leading-5 text-[#68736e] sm:mt-1.5 sm:text-sm">
              {hero.imageCard.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero