import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeConfig } from '../../config/home'

const highlightIcons: Record<string, LucideIcon> = {
  human: Heart,
  integrated: Leaf,
  individual: Sparkles,
}

function AboutClinic() {
  const { aboutClinic } = homeConfig

  return (
    <section className="overflow-hidden bg-[#f7f5f0] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={aboutClinic.image.src}
                alt={aboutClinic.image.alt}
                className="h-[480px] w-full object-cover sm:h-[600px] lg:h-[680px]"
              />
            </div>

            <div className="absolute -bottom-6 right-4 max-w-[260px] rounded-[1.5rem] bg-[#315c4f] p-6 !text-white shadow-xl sm:right-8 sm:max-w-[300px] sm:p-7">
              <p className="text-sm leading-6 text-white/80">
                {aboutClinic.imageCard.description}
              </p>

              <p className="mt-1 text-xl font-semibold tracking-tight">
                {aboutClinic.imageCard.highlight}
              </p>
            </div>
          </div>

          <div className="lg:pl-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {aboutClinic.eyebrow}
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              {aboutClinic.title}

              <span className="block text-[#315c4f]">
                {aboutClinic.titleHighlight}
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              {aboutClinic.description}
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#68736e]">
              {aboutClinic.secondaryDescription}
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {aboutClinic.highlights.map((highlight) => {
                const Icon = highlightIcons[highlight.id]

                return (
                  <div
                    key={highlight.id}
                    className="border-t border-[#d9d6ce] pt-5"
                  >
                    {Icon && (
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-[#315c4f]"
                      />
                    )}

                    <p className="mt-3 text-sm font-semibold text-[#24312c]">
                      {highlight.label}
                    </p>
                  </div>
                )
              })}
            </div>

            <Link
              to={aboutClinic.button.href}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#23463c]"
            >
              {aboutClinic.button.label}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutClinic