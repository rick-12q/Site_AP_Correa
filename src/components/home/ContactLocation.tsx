import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function ContactLocation() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
            Contato e localização
          </p>

          <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
            Estamos aqui para
            <span className="block text-[#68736e]">
              receber você.
            </span>
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#dfddd6] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between bg-[#f7f5f0] p-7 sm:p-10 lg:p-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#24312c]">
                Clínica Ana Paula S. Corrêa
              </h3>

              <p className="mt-4 max-w-md text-base leading-7 text-[#68736e]">
                Entre em contato para informações sobre atendimentos,
                disponibilidade de horários e agendamentos.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <MapPin size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#24312c]">
                      Localização
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#68736e]">
                      Endereço da clínica será informado aqui.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <Clock3 size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#24312c]">
                      Atendimento
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#68736e]">
                      Horários de atendimento serão informados aqui.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <MessageCircle size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#24312c]">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#68736e]">
                      Entre em contato para conversar com a clínica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contato"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              Ver informações de contato
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-[#e9e7e1] lg:min-h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#315c4f] shadow-sm">
                  <MapPin size={26} strokeWidth={1.6} />
                </div>

                <p className="mt-6 text-lg font-semibold text-[#24312c]">
                  Localização da clínica
                </p>

                <p className="mt-2 text-sm leading-6 text-[#68736e]">
                  O mapa será exibido neste espaço quando cadastrarmos o
                  endereço definitivo da clínica.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -right-28 h-[350px] w-[350px] rounded-full border border-[#315c4f]/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-16 h-[250px] w-[250px] rounded-full border border-[#315c4f]/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocation