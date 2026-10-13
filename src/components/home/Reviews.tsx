import { Quote, Star } from 'lucide-react'
import {
  getEnabledReviews,
  reviewsConfig,
} from '../../config/reviews'

function Reviews() {
  const reviews = getEnabledReviews()
  const { section } = reviewsConfig

  if (reviews.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {section.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
              {section.title}

              <span className="block text-[#68736e]">
                {section.titleHighlight}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-[#68736e]">
            <Star
              size={18}
              fill="currentColor"
              className="text-[#315c4f]"
            />

            {section.label}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex min-h-[320px] flex-col justify-between rounded-[1.75rem] border border-[#dfddd6] bg-[#f7f5f0] p-7 sm:p-8"
            >
              <div>
                <Quote
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#315c4f]"
                />

                <div
                  className="mt-7 flex gap-1"
                  aria-label={`${review.rating} de 5 estrelas`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      strokeWidth={1.6}
                      fill={
                        index < review.rating
                          ? 'currentColor'
                          : 'none'
                      }
                      className={
                        index < review.rating
                          ? 'text-[#315c4f]'
                          : 'text-[#b8bdb9]'
                      }
                    />
                  ))}
                </div>

                <p className="mt-6 text-base leading-7 text-[#4f5b54]">
                  “{review.text}”
                </p>
              </div>

              <div className="mt-8 border-t border-[#dfddd6] pt-5">
                <p className="font-semibold text-[#24312c]">
                  {review.name}
                </p>

                {review.treatment && (
                  <p className="mt-1 text-sm text-[#68736e]">
                    {review.treatment}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews