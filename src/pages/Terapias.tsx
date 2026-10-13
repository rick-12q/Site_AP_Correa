import {
  ArrowRight,
  CircleDot,
  Flame,
  Flower2,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const therapies = [
  {
    icon: Sparkles,
    title: 'Reiki',
    description:
      'Prática integrativa voltada ao relaxamento, ao equilíbrio e à promoção do bem-estar.',
    href: '/terapias/reiki',
  },
  {
    icon: CircleDot,
    title: 'Acupuntura',
    description:
      'Técnica tradicional que utiliza a estimulação de pontos específicos como parte de uma abordagem integrativa de cuidado.',
    href: '/terapias/acupuntura',
  },
  {
    icon: Flower2,
    title: 'Auriculoterapia',
    description:
      'Prática que utiliza pontos específicos da orelha como recurso complementar para o cuidado e o equilíbrio do organismo.',
    href: '/terapias/auriculoterapia',
  },
  {
    icon: Flame,
    title: 'Moxabustão',
    description:
      'Técnica tradicional baseada na aplicação controlada de calor em pontos específicos como prática complementar.',
    href: '/terapias/moxabustao',
  },
]

function Terapias() {
  return (
    <main>
      <section className="overflow-hidden bg-[#f7f5f0]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
                alt="Ambiente de cuidado e terapias integrativas"
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />
            </div>

            <div className="absolute -bottom-5 right-5 max-w-[280px] rounded-2xl bg-white p-5 shadow-xl sm:right-8 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#315c4f]">
                Bem-estar
              </p>

              <p className="mt-2 text-sm leading-6 text-[#68736e]">
                Um momento de cuidado pensado para olhar você de forma
                integral.
              </p>
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              Terapias integrativas
            </p>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-6xl">
              Equilíbrio para o corpo,
              <span className="block text-[#315c4f]">
                cuidado para o bem-estar.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              Práticas integrativas que complementam o cuidado com a saúde,
              respeitando as necessidades e particularidades de cada pessoa.
            </p>

            <Link
              to="/contato"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              Agendar atendimento
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                Cuidado integrativo
              </p>

              <p className="mt-6 max-w-sm text-base leading-7 text-[#68736e]">
                Diferentes práticas podem fazer parte de uma abordagem
                complementar voltada à promoção de bem-estar e qualidade de
                vida.
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                Um olhar que considera
                <span className="text-[#68736e]">
                  {' '}a pessoa como um todo.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#dfddd6] pt-8 sm:grid-cols-2">
                <div>
                  <span className="text-sm font-semibold text-[#315c4f]">
                    01
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-[#24312c]">
                    Atendimento individual
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68736e]">
                    A escolha e a condução das práticas consideram as
                    características e necessidades de cada pessoa.
                  </p>
                </div>

                <div>
                  <span className="text-sm font-semibold text-[#315c4f]">
                    02
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-[#24312c]">
                    Cuidado complementar
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68736e]">
                    As terapias integrativas atuam como práticas
                    complementares dentro de uma proposta ampla de cuidado e
                    bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#315c4f] py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Terapias
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Conheça as práticas
                <span className="block text-white/55">
                  disponíveis na clínica.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/65">
              Cada prática possui características próprias e pode ser
              considerada de acordo com as necessidades de cada atendimento.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-white/20 sm:grid-cols-2 lg:mt-16">
            {therapies.map((therapy) => {
              const Icon = therapy.icon

              return (
                <Link
                  key={therapy.title}
                  to={therapy.href}
                  className="group min-h-[310px] border-b border-r border-white/20 p-7 transition duration-300 hover:bg-white/10 sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 group-hover:bg-white group-hover:text-[#315c4f]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <ArrowRight
                      size={19}
                      className="text-white/45 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-12 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {therapy.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                    {therapy.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                Seu momento de cuidado
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                Quer conhecer melhor
                <span className="block text-[#68736e]">
                  as terapias disponíveis?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#68736e]">
                Entre em contato com a clínica para obter mais informações
                sobre os atendimentos e agendamentos.
              </p>
            </div>

            <Link
              to="/contato"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              Entrar em contato
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terapias