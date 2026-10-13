import {
  ArrowRight,
  CircleDot,
  Flame,
  Flower2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AppointmentButton from '../components/AppointmentButton'
import { therapiesPageConfig } from '../config/therapiesPage'
import {
  getTreatmentsByCategory,
  type TreatmentConfig,
} from '../config/treatments'

const therapyIcons: Record<string, LucideIcon> = {
  reiki: Sparkles,
  acupuntura: CircleDot,
  auriculoterapia: Flower2,
  moxabustao: Flame,
}

function Terapias() {
  const page = therapiesPageConfig

  const therapies: TreatmentConfig[] =
    getTreatmentsByCategory('terapias')

  return (
    <main>
      <section className="overflow-hidden bg-[#f7f5f0]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={page.hero.image.src}
                alt={page.hero.image.alt}
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />
            </div>

            <div className="absolute -bottom-5 right-5 max-w-[280px] rounded-2xl bg-white p-5 shadow-xl sm:right-8 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#315c4f]">
                {page.hero.imageCard.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-[#68736e]">
                {page.hero.imageCard.description}
              </p>
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {page.hero.eyebrow}
            </p>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-6xl">
              {page.hero.title}

              <span className="block text-[#315c4f]">
                {page.hero.titleHighlight}
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              {page.hero.description}
            </p>

            <AppointmentButton className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]">
              {page.hero.buttonLabel}
              <ArrowRight size={17} />
            </AppointmentButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                {page.approach.eyebrow}
              </p>

              <p className="mt-6 max-w-sm text-base leading-7 text-[#68736e]">
                {page.approach.introduction}
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                {page.approach.title}

                <span className="text-[#68736e]">
                  {' '}
                  {page.approach.titleHighlight}
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#dfddd6] pt-8 sm:grid-cols-2">
                {page.approach.principles.map((principle) => (
                  <div key={principle.number}>
                    <span className="text-sm font-semibold text-[#315c4f]">
                      {principle.number}
                    </span>

                    <h3 className="mt-4 text-lg font-semibold text-[#24312c]">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#68736e]">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {page.therapiesSection.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              {page.therapiesSection.title}

              <span className="block text-[#68736e]">
                {page.therapiesSection.titleHighlight}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#68736e]">
              {page.therapiesSection.description}
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d9d6ce] sm:grid-cols-2 lg:mt-16">
            {therapies.map((therapy) => {
              const Icon = therapyIcons[therapy.id]

              return (
                <Link
                  key={therapy.id}
                  to={therapy.href}
                  className="group min-h-[300px] border-b border-r border-[#d9d6ce] bg-[#f7f5f0] p-7 transition duration-300 hover:bg-white sm:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f] transition duration-300 group-hover:bg-[#315c4f] group-hover:!text-white">
                      {Icon && (
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />
                      )}
                    </div>

                    <ArrowRight
                      size={19}
                      className="text-[#8a948f] transition duration-300 group-hover:translate-x-1 group-hover:text-[#315c4f]"
                    />
                  </div>

                  <h3 className="mt-12 text-xl font-semibold tracking-tight text-[#24312c] sm:text-2xl">
                    {therapy.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-[#68736e] sm:text-base sm:leading-7">
                    {therapy.overviewDescription}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                {page.finalCTA.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                {page.finalCTA.title}

                <span className="block text-[#68736e]">
                  {page.finalCTA.titleHighlight}
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#68736e]">
                {page.finalCTA.description}
              </p>
            </div>

            <AppointmentButton className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]">
              {page.finalCTA.buttonLabel}
              <ArrowRight size={17} />
            </AppointmentButton>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terapias