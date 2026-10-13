import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const principles = [
  {
    number: '01',
    icon: Heart,
    title: 'Acolhimento',
    description:
      'Um atendimento construído com atenção, respeito e espaço para compreender as necessidades de cada pessoa.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Individualidade',
    description:
      'Cada cuidado é pensado considerando características, necessidades e objetivos individuais.',
  },
  {
    number: '03',
    icon: Leaf,
    title: 'Visão integrada',
    description:
      'Odontologia e terapias integrativas compartilham uma proposta de cuidado voltada à saúde e ao bem-estar.',
  },
]

function Clinica() {
  return (
    <main>
      <section className="overflow-hidden bg-[#f7f5f0]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              A clínica
            </p>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-7xl">
              Um espaço pensado
              <span className="block text-[#315c4f]">
                para cuidar de você.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              Um ambiente onde odontologia, terapias integrativas e
              atendimento próximo se encontram em uma proposta de cuidado
              individualizado.
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[2rem] sm:mt-16">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85"
              alt="Ambiente da clínica"
              className="h-[420px] w-full object-cover sm:h-[540px] lg:h-[650px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                Nossa proposta
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                Cuidado técnico,
                <span className="text-[#68736e]">
                  {' '}próximo e individual.
                </span>
              </h2>

              <div className="mt-9 grid gap-7 text-base leading-7 text-[#68736e] sm:grid-cols-2">
                <p>
                  A proposta da clínica é oferecer um atendimento que
                  considere cada pessoa de forma individual, criando espaço
                  para escuta, orientação e acompanhamento.
                </p>

                <p>
                  A odontologia e as terapias integrativas fazem parte desse
                  cuidado, respeitando as características próprias de cada
                  área e as necessidades de cada atendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              Nossa forma de cuidar
            </p>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              Princípios presentes
              <span className="block text-[#68736e]">
                em cada atendimento.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d9d6ce] lg:mt-16 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon

              return (
                <div
                  key={principle.number}
                  className="min-h-[340px] border-b border-r border-[#d9d6ce] p-7 sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-semibold tracking-[0.12em] text-[#9ba39f]">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="mt-14 text-xl font-semibold tracking-tight text-[#24312c] sm:text-2xl">
                    {principle.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#68736e] sm:text-base sm:leading-7">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
                alt="Cuidado profissional na clínica"
                className="h-[460px] w-full object-cover sm:h-[580px]"
              />
            </div>

            <div className="absolute -bottom-5 right-5 rounded-2xl bg-[#315c4f] p-6 text-white shadow-xl sm:right-8">
              <p className="max-w-[230px] text-sm leading-6 text-white/75">
                Um ambiente preparado para proporcionar
              </p>

              <p className="mt-1 text-lg font-semibold">
                tranquilidade e acolhimento.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              O ambiente
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              Conforto também faz
              <span className="block text-[#68736e]">
                parte do cuidado.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              Cada detalhe do ambiente busca contribuir para uma experiência
              tranquila, acolhedora e adequada aos diferentes atendimentos
              realizados na clínica.
            </p>

            <Link
              to="/contato"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              Entre em contato
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#24312c] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Conheça a clínica
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Estamos preparados para
                <span className="block text-white/55">
                  receber você.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
                Entre em contato para conhecer os atendimentos disponíveis e
                obter mais informações.
              </p>
            </div>

            <Link
              to="/contato"
              style={{ color: '#24312c' }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-[#dfe9e4]"
            >
              Falar com a clínica
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Clinica