import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f1]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2f5d50]">
            Odontologia e terapias integrativas
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#2f3a35] sm:text-5xl lg:text-6xl">
            Cuidado que acolhe,
            <span className="block text-[#2f5d50]">saúde que transforma.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#66716b] sm:text-lg">
            Um espaço pensado para cuidar do seu sorriso, do seu bem-estar e
            da sua saúde de forma integrada, com atendimento próximo e
            personalizado.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f5d50] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24493e]"
            >
              Agendar atendimento
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/clinica"
              className="inline-flex items-center justify-center rounded-full border border-[#cfc9bd] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#3f4b45] transition hover:bg-white"
            >
              Conheça a clínica
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#e5e1d8] pt-6 text-sm text-[#66716b]">
            <span>Atendimento personalizado</span>
            <span>Ambiente acolhedor</span>
            <span>Visão integrada</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-[#e7e2d8] shadow-[0_24px_70px_rgba(47,58,53,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
              alt="Profissional realizando atendimento odontológico"
              className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[620px]"
            />
          </div>

          <div className="absolute -bottom-5 left-5 max-w-xs rounded-2xl border border-[#e5e1d8] bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8">
            <p className="text-sm font-semibold text-[#2f3a35]">
              Cuidado individualizado
            </p>
            <p className="mt-1.5 text-sm leading-5 text-[#66716b]">
              Cada atendimento começa entendendo você e as suas necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero