const principles = [
  {
    number: '01',
    title: 'Escuta individual',
    description:
      'Cada pessoa tem necessidades, histórias e objetivos diferentes. Por isso, todo cuidado começa com uma escuta atenta e próxima.',
  },
  {
    number: '02',
    title: 'Cuidado integrado',
    description:
      'Odontologia e terapias integrativas convivem em uma proposta que considera saúde, bem-estar e qualidade de vida de forma conjunta.',
  },
  {
    number: '03',
    title: 'Atendimento humano',
    description:
      'Conhecimento técnico e atenção aos detalhes se unem a um atendimento acolhedor, respeitoso e construído com tranquilidade.',
  },
]

function CarePhilosophy() {
  return (
    <section className="bg-[#315c4f] py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Nossa forma de cuidar
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              O cuidado começa
              <span className="block text-white/55">
                antes do tratamento.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-white/65">
              Acreditamos que uma boa experiência de cuidado nasce da
              combinação entre conhecimento, atenção e compreensão de cada
              pessoa.
            </p>
          </div>

          <div>
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-5 border-t border-white/20 py-8 sm:grid-cols-[80px_1fr] sm:gap-8 sm:py-10"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-white/45">
                  {principle.number}
                </span>

                <div className="grid gap-4 md:grid-cols-[0.7fr_1fr] md:gap-10">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarePhilosophy