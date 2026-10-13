import {
  ArrowRight,
  Braces,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const treatments = [
  {
    icon: Sparkles,
    title: 'Limpeza e prevenção',
    description:
      'Acompanhamento preventivo para preservar a saúde bucal, prevenir problemas e manter o sorriso saudável.',
    href: '/odontologia/limpeza',
  },
  {
    icon: ShieldCheck,
    title: 'Restauração',
    description:
      'Recuperação de dentes comprometidos, buscando devolver função, conforto e uma aparência natural.',
    href: '/odontologia/restauracao',
  },
  {
    icon: HeartPulse,
    title: 'Tratamento de canal',
    description:
      'Cuidado direcionado à parte interna do dente, com o objetivo de controlar infecções e preservar o elemento dental.',
    href: '/odontologia/canal',
  },
  {
    icon: Braces,
    title: 'Ortodontia',
    description:
      'Planejamento individualizado para melhorar o alinhamento dos dentes, a função e a harmonia do sorriso.',
    href: '/odontologia/ortodontia',
  },
]

function Odontologia() {
  return (
    <main>
      <section className="overflow-hidden bg-[#f7f5f0]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              Odontologia
            </p>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-6xl">
              Saúde para o sorriso,
              <span className="block text-[#315c4f]">
                cuidado para você.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              Atendimento odontológico individualizado, com atenção à
              prevenção, ao conforto e às necessidades de cada pessoa.
            </p>

            <Link
              to="/contato"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              Agendar atendimento
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85"
                alt="Atendimento odontológico"
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#315c4f]">
                Cuidado individual
              </p>

              <p className="mt-2 max-w-[260px] text-sm leading-6 text-[#68736e]">
                Cada tratamento começa entendendo suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                Nossa abordagem
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                Odontologia baseada em
                <span className="text-[#68736e]">
                  {' '}prevenção, atenção e planejamento.
                </span>
              </h2>

              <div className="mt-8 grid gap-6 text-base leading-7 text-[#68736e] sm:grid-cols-2">
                <p>
                  O cuidado com a saúde bucal vai além de resolver um problema
                  pontual. O acompanhamento preventivo ajuda a identificar
                  alterações precocemente e preservar dentes e estruturas
                  saudáveis.
                </p>

                <p>
                  Cada atendimento considera as características e necessidades
                  individuais para construir um plano de cuidado adequado,
                  buscando saúde, função e conforto.
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
              Tratamentos
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              Cuidados para cada
              <span className="block text-[#68736e]">
                momento do seu sorriso.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d9d6ce] sm:grid-cols-2 lg:mt-16">
            {treatments.map((treatment) => {
              const Icon = treatment.icon

              return (
                <Link
                  key={treatment.title}
                  to={treatment.href}
                  className="group min-h-[300px] border-b border-r border-[#d9d6ce] bg-[#f7f5f0] p-7 transition duration-300 hover:bg-white sm:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f] transition duration-300 group-hover:bg-[#315c4f] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <ArrowRight
                      size={19}
                      className="text-[#8a948f] transition duration-300 group-hover:translate-x-1 group-hover:text-[#315c4f]"
                    />
                  </div>

                  <h3 className="mt-12 text-xl font-semibold tracking-tight text-[#24312c] sm:text-2xl">
                    {treatment.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-[#68736e] sm:text-base sm:leading-7">
                    {treatment.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] bg-[#315c4f] px-7 py-14 sm:px-10 sm:py-16 lg:flex lg:items-end lg:justify-between lg:gap-16 lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Atendimento odontológico
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Comece cuidando
                <span className="block text-white/55">
                  do seu sorriso.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
                Entre em contato para conversar sobre suas necessidades e
                agendar uma avaliação.
              </p>
            </div>

            <Link
              to="/contato"
              style={{ color: '#24312c' }}
              className="mt-9 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-[#dfe9e4] lg:mt-0"
            >
              Agendar avaliação
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Odontologia