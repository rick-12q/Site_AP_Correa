import {
  ArrowRight,
  Braces,
  CircleDot,
  Flower2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeConfig } from '../../config/home'
import {
  getTreatmentsByCategory,
  type TreatmentConfig,
} from '../../config/treatments'

const treatmentIcons: Record<string, LucideIcon> = {
  limpeza: Sparkles,
  restauracao: ShieldCheck,
  canal: HeartPulse,
  ortodontia: Braces,
  reiki: Waves,
  acupuntura: CircleDot,
  auriculoterapia: Flower2,
  moxabustao: Wind,
}

type TreatmentGroupProps = {
  title: string
  description: string
  href: string
  treatments: TreatmentConfig[]
  viewAllLabel: string
}

function TreatmentGroup({
  title,
  description,
  href,
  treatments,
  viewAllLabel,
}: TreatmentGroupProps) {
  return (
    <div className="motion-card overflow-hidden rounded-[2rem] border border-[#dfddd6] bg-white">
      <div className="flex flex-col gap-5 border-b border-[#dfddd6] bg-[#f7f5f0] p-7 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#24312c]">
            {title}
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-[#68736e]">
            {description}
          </p>
        </div>

        <Link
          to={href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#315c4f] transition hover:text-[#23463c]"
        >
          {viewAllLabel}

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="divide-y divide-[#dfddd6]">
        {treatments.map((treatment: TreatmentConfig) => {
          const Icon = treatmentIcons[treatment.id]

          return (
            <Link
              key={treatment.id}
              to={treatment.href}
              className="treatment-row group grid gap-5 p-6 transition duration-300 hover:bg-[#f7f5f0] sm:grid-cols-[48px_1fr_auto] sm:items-center sm:px-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f] transition duration-300 group-hover:bg-[#315c4f] group-hover:!text-white">
                {Icon && (
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                  />
                )}
              </div>

              <div>
                <h4 className="font-semibold tracking-tight text-[#24312c] sm:text-lg">
                  {treatment.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#68736e]">
                  {treatment.shortDescription}
                </p>
              </div>

              <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#d9d6ce] text-[#315c4f] transition duration-300 group-hover:border-[#315c4f] group-hover:bg-[#315c4f] group-hover:!text-white sm:flex">
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function Treatments() {
  const { treatments } = homeConfig

  const odontologia =
    getTreatmentsByCategory('odontologia')

  const terapias =
    getTreatmentsByCategory('terapias')

  return (
    <section
      id="tratamentos"
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {treatments.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              {treatments.title}

              <span className="block text-[#315c4f]">
                {treatments.titleHighlight}
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#68736e] lg:justify-self-end">
            {treatments.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
          <TreatmentGroup
            title={treatments.groups.dentistry.title}
            description={treatments.groups.dentistry.description}
            href={treatments.groups.dentistry.href}
            treatments={odontologia}
            viewAllLabel={treatments.viewAllLabel}
          />

          <TreatmentGroup
            title={treatments.groups.therapies.title}
            description={treatments.groups.therapies.description}
            href={treatments.groups.therapies.href}
            treatments={terapias}
            viewAllLabel={treatments.viewAllLabel}
          />
        </div>
      </div>
    </section>
  )
}

export default Treatments