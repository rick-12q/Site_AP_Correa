import { ArrowRight, Heart, Leaf, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function AboutClinic() {
  return (
    <section className="overflow-hidden bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                alt="Ambiente acolhedor da clínica"
                className="h-[480px] w-full object-cover sm:h-[600px] lg:h-[680px]"
              />
            </div>

            <div className="absolute -bottom-6 right-4 max-w-[260px] rounded-[1.5rem] bg-[#315c4f] p-6 !text-white shadow-xl sm:right-8 sm:max-w-[300px] sm:p-7">
              <p className="text-sm leading-6 text-white/80">
                Um espaço pensado para que cada pessoa se sinta
              </p>

              <p className="mt-1 text-xl font-semibold tracking-tight">
                acolhida, ouvida e bem cuidada.
              </p>
            </div>
          </div>

          <div className="lg:pl-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              A clínica
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              Cuidar da saúde também é
              <span className="block text-[#315c4f]">
                cuidar de cada detalhe.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              A clínica nasceu com a proposta de oferecer um atendimento
              próximo e individualizado, reunindo odontologia e terapias
              integrativas em um ambiente tranquilo e acolhedor.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#68736e]">
              Mais do que tratar sintomas, buscamos compreender cada pessoa,
              suas necessidades e seu momento, construindo um cuidado que
              considera saúde, bem-estar e qualidade de vida.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              <div className="border-t border-[#d9d6ce] pt-5">
                <Heart
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#315c4f]"
                />

                <p className="mt-3 text-sm font-semibold text-[#24312c]">
                  Atendimento humano
                </p>
              </div>

              <div className="border-t border-[#d9d6ce] pt-5">
                <Leaf
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#315c4f]"
                />

                <p className="mt-3 text-sm font-semibold text-[#24312c]">
                  Visão integrada
                </p>
              </div>

              <div className="border-t border-[#d9d6ce] pt-5">
                <Sparkles
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#315c4f]"
                />

                <p className="mt-3 text-sm font-semibold text-[#24312c]">
                  Cuidado individual
                </p>
              </div>
            </div>

            <Link
              to="/clinica"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              Conheça nossa história
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutClinic