import { homeConfig } from '../../config/home'

function CarePhilosophy() {
  const { carePhilosophy } = homeConfig

  return (
    <section className="bg-[#315c4f] py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              {carePhilosophy.eyebrow}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {carePhilosophy.title}

              <span className="block text-white/55">
                {carePhilosophy.titleHighlight}
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-white/65">
              {carePhilosophy.description}
            </p>
          </div>

          <div>
            {carePhilosophy.principles.map((principle) => (
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