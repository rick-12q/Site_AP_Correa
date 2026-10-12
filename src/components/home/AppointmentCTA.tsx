import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function AppointmentCTA() {
  return (
    <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#24312c] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -right-16 -top-24 h-[300px] w-[300px] rounded-full border border-white/10"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Agendamento
              </p>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-6xl">
                Seu cuidado pode
                <span className="block text-white/55">
                  começar aqui.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Entre em contato para conversar sobre suas necessidades,
                conhecer os atendimentos disponíveis e encontrar o melhor
                horário para você.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contato"
                style={{ color: '#24312c' }}
                className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-[#dfe9e4]"
              >
                Agendar atendimento
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contato"
                className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                <MessageCircle size={17} />
                Falar com a clínica
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentCTA