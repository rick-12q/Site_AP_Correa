import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppointmentButton from './AppointmentButton'

type TreatmentPageProps = {
  category: string
  categoryHref: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  benefits: string[]
}

function TreatmentPage({
  category,
  categoryHref,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  benefits,
}: TreatmentPageProps) {
  return (
    <main>
      <section className="overflow-hidden bg-[#f7f5f0]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <Link
              to={categoryHref}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#315c4f] transition hover:text-[#23463c]"
            >
              <ArrowLeft size={16} />
              {category}
            </Link>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 text-xl font-medium leading-8 text-[#315c4f]">
              {subtitle}
            </p>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              {description}
            </p>

            <AppointmentButton className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]">
              Agendar atendimento
              <ArrowRight size={17} />
            </AppointmentButton>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={image}
              alt={imageAlt}
              className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                Sobre o tratamento
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                Cuidado pensado para
                <span className="text-[#68736e]">
                  {' '}
                  suas necessidades.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
                O atendimento começa com uma avaliação individual. A partir
                dela, é possível compreender as necessidades de cada pessoa e
                definir a abordagem mais adequada para o cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                O cuidado
              </p>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl">
                Por que esse acompanhamento é importante?
              </h2>
            </div>

            <div className="border-t border-[#d9d6ce]">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 border-b border-[#d9d6ce] py-6"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <Check size={15} strokeWidth={2} />
                  </div>

                  <p className="text-base leading-7 text-[#68736e]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#315c4f] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
              Agendamento
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Quer saber se este cuidado
              <span className="block text-white/55">
                é indicado para você?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
              Entre em contato para obter mais informações e conversar sobre
              suas necessidades.
            </p>
          </div>

          <AppointmentButton
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-[#dfe9e4]"
          >
            <span style={{ color: '#24312c' }}>
              Entrar em contato
            </span>
            <ArrowRight
              size={17}
              style={{ color: '#24312c' }}
            />
          </AppointmentButton>
        </div>
      </section>
    </main>
  )
}

export default TreatmentPage