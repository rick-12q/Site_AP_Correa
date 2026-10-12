import {
  ArrowUpRight,
  Braces,
  CircleDot,
  Flower2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const treatments = [
  {
    category: 'Odontologia',
    title: 'Limpeza e prevenção',
    description:
      'Cuidados preventivos para preservar a saúde bucal e manter seu sorriso saudável.',
    icon: Sparkles,
    href: '/odontologia/limpeza',
  },
  {
    category: 'Odontologia',
    title: 'Restauração',
    description:
      'Recuperação funcional e estética dos dentes com atenção a cada detalhe.',
    icon: ShieldCheck,
    href: '/odontologia/restauracao',
  },
  {
    category: 'Odontologia',
    title: 'Tratamento de canal',
    description:
      'Tratamento cuidadoso para preservar o dente e devolver conforto e saúde.',
    icon: HeartPulse,
    href: '/odontologia/canal',
  },
  {
    category: 'Odontologia',
    title: 'Ortodontia',
    description:
      'Planejamento para melhorar alinhamento, função e harmonia do sorriso.',
    icon: Braces,
    href: '/odontologia/ortodontia',
  },
  {
    category: 'Terapias integrativas',
    title: 'Reiki',
    description:
      'Prática integrativa voltada ao relaxamento, equilíbrio e bem-estar.',
    icon: Waves,
    href: '/terapias/reiki',
  },
  {
    category: 'Terapias integrativas',
    title: 'Acupuntura',
    description:
      'Técnica tradicional utilizada como apoio ao equilíbrio e ao cuidado integral.',
    icon: CircleDot,
    href: '/terapias/acupuntura',
  },
  {
    category: 'Terapias integrativas',
    title: 'Auriculoterapia',
    description:
      'Estimulação de pontos específicos da orelha como prática complementar de cuidado.',
    icon: Flower2,
    href: '/terapias/auriculoterapia',
  },
  {
    category: 'Terapias integrativas',
    title: 'Moxabustão',
    description:
      'Técnica complementar que utiliza estímulo térmico em pontos específicos.',
    icon: Wind,
    href: '/terapias/moxabustao',
  },
]

function Treatments() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              Cuidados
            </p>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              Diferentes caminhos para
              <span className="block text-[#68736e]">
                cuidar de você.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#68736e]">
            Conheça alguns dos atendimentos disponíveis e encontre o cuidado
            mais adequado para suas necessidades.
          </p>
        </div>

        <div className="mt-12 grid border-t border-l border-[#dfddd6] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {treatments.map((treatment) => {
            const Icon = treatment.icon

            return (
              <Link
                key={treatment.title}
                to={treatment.href}
                className="group relative min-h-[310px] border-r border-b border-[#dfddd6] p-7 transition duration-300 hover:bg-[#f7f5f0] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f] transition duration-300 group-hover:bg-[#315c4f] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.7}
                    className="text-[#9ba39f] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#315c4f]"
                  />
                </div>

                <div className="mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a8580]">
                    {treatment.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#24312c]">
                    {treatment.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#68736e]">
                    {treatment.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/odontologia"
            className="inline-flex items-center gap-2 rounded-full border border-[#315c4f] px-5 py-3 text-sm font-semibold text-[#315c4f] transition hover:bg-[#315c4f] hover:text-white"
          >
            Ver odontologia
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/terapias"
            className="inline-flex items-center gap-2 rounded-full border border-[#315c4f] px-5 py-3 text-sm font-semibold text-[#315c4f] transition hover:bg-[#315c4f] hover:text-white"
          >
            Ver terapias
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments