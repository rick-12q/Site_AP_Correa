import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'

function Contato() {
  return (
    <main>
      <section className="bg-[#f7f5f0] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              Contato
            </p>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-7xl">
              Vamos conversar sobre
              <span className="block text-[#315c4f]">
                o seu cuidado.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              Entre em contato para tirar dúvidas, conhecer melhor os
              atendimentos disponíveis ou solicitar um agendamento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              Fale conosco
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              Escolha a melhor forma
              <span className="block text-[#68736e]">
                de entrar em contato.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#68736e]">
              Para informações sobre tratamentos, terapias, disponibilidade
              de horários ou agendamentos, utilize um dos canais de
              atendimento da clínica.
            </p>
          </div>

          <div className="border-t border-[#dfddd6]">
            <div className="grid gap-5 border-b border-[#dfddd6] py-7 sm:grid-cols-[56px_1fr_auto] sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                <MessageCircle size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="font-semibold text-[#24312c]">
                  WhatsApp
                </p>

                <p className="mt-1 text-sm leading-6 text-[#68736e]">
                  Número de atendimento será informado aqui.
                </p>
              </div>

              <ArrowUpRight
                size={19}
                className="hidden text-[#9ba39f] sm:block"
              />
            </div>

            <div className="grid gap-5 border-b border-[#dfddd6] py-7 sm:grid-cols-[56px_1fr_auto] sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                <Mail size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="font-semibold text-[#24312c]">
                  E-mail
                </p>

                <p className="mt-1 text-sm leading-6 text-[#68736e]">
                  Endereço de e-mail será informado aqui.
                </p>
              </div>
            </div>

            <div className="grid gap-5 border-b border-[#dfddd6] py-7 sm:grid-cols-[56px_1fr_auto] sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                <Clock3 size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="font-semibold text-[#24312c]">
                  Horários
                </p>

                <p className="mt-1 text-sm leading-6 text-[#68736e]">
                  Horários de atendimento serão informados aqui.
                </p>
              </div>
            </div>

            <div className="grid gap-5 border-b border-[#dfddd6] py-7 sm:grid-cols-[56px_1fr_auto] sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                <MapPin size={20} strokeWidth={1.7} />
              </div>

              <div>
                <p className="font-semibold text-[#24312c]">
                  Endereço
                </p>

                <p className="mt-1 text-sm leading-6 text-[#68736e]">
                  Endereço completo da clínica será informado aqui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#dfddd6] bg-white lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                Localização
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl">
                Encontre a clínica.
              </h2>

              <p className="mt-5 max-w-sm text-base leading-7 text-[#68736e]">
                Quando cadastrarmos o endereço definitivo, você poderá
                consultar a localização e abrir a rota diretamente pelo mapa.
              </p>

              <div className="mt-8 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                  <MapPin size={19} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#24312c]">
                    Clínica Ana Paula S. Corrêa
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#68736e]">
                    Endereço será informado aqui.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[450px] overflow-hidden bg-[#e9e7e1] lg:min-h-[580px]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="max-w-sm text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#315c4f] shadow-sm">
                    <MapPin size={26} strokeWidth={1.6} />
                  </div>

                  <p className="mt-6 text-lg font-semibold text-[#24312c]">
                    Mapa da clínica
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#68736e]">
                    O mapa interativo será inserido aqui quando definirmos o
                    endereço da clínica.
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

      <section className="bg-[#315c4f] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
            Atendimento
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Seu cuidado começa
            <span className="block text-white/55">
              com uma conversa.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">
            Entre em contato com a clínica para obter informações sobre os
            atendimentos disponíveis.
          </p>

          <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white">
            <MessageCircle size={17} />
            WhatsApp será configurado aqui
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contato