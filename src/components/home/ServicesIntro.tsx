import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Odontologia',
    description:
      'Cuidado odontológico completo, unindo saúde, estética e prevenção em um atendimento próximo e individualizado.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85',
    href: '/odontologia',
  },
  {
    title: 'Terapias Integrativas',
    description:
      'Práticas que promovem equilíbrio, bem-estar e qualidade de vida, considerando você de forma integral.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    href: '/terapias',
  },
]

function ServicesIntro() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
            Nossas áreas de cuidado
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
            Saúde e bem-estar
            <span className="block text-[#68736e]">
              vistos de forma integrada.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative min-h-[480px] overflow-hidden rounded-[2rem] sm:min-h-[560px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 sm:p-9">
                <div className="max-w-md">
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#315c4f] transition duration-300 group-hover:rotate-45 group-hover:scale-110">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesIntro