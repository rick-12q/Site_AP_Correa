import {
  Award,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
} from 'lucide-react'
import AppointmentButton from '../components/AppointmentButton'
import { clinicPageConfig } from '../config/clinicPage'
import { professionalConfig } from '../config/professional'

function Clinica() {
  const professional = professionalConfig
  const page = clinicPageConfig

  const hasProfession =
    professional.profession.trim().length > 0

  const hasCro =
    professional.cro.trim().length > 0

  const hasAbout =
    professional.presentation.about.trim().length > 0

  const hasPhilosophy =
    professional.presentation.philosophy.trim().length > 0

  const hasEducation =
    professional.education.degree.trim().length > 0 ||
    professional.education.institution.trim().length > 0 ||
    professional.education.graduationYear.trim().length > 0

  const hasExperience =
    professional.experience.years.trim().length > 0 ||
    professional.experience.description.trim().length > 0

  const hasSpecializations =
    professional.specializations.length > 0

  const hasCourses =
    professional.courses.length > 0

  const hasProfessionalDetails =
    hasEducation ||
    hasExperience ||
    hasSpecializations ||
    hasCourses

  const therapyAreas = [
    {
      name: page.careAreas.therapies.reiki,
      enabled: professional.therapies.reiki.enabled,
      qualification:
        professional.therapies.reiki.qualification,
    },
    {
      name: page.careAreas.therapies.acupuncture,
      enabled: professional.therapies.acupuncture.enabled,
      qualification:
        professional.therapies.acupuncture.qualification,
    },
    {
      name: page.careAreas.therapies.auriculotherapy,
      enabled: professional.therapies.auriculotherapy.enabled,
      qualification:
        professional.therapies.auriculotherapy.qualification,
    },
    {
      name: page.careAreas.therapies.moxibustion,
      enabled: professional.therapies.moxibustion.enabled,
      qualification:
        professional.therapies.moxibustion.qualification,
    },
  ].filter((therapy) => therapy.enabled)

  return (
    <main>
      <section className="overflow-hidden bg-[#f7f5f0]">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
              {page.hero.eyebrow}
            </p>

            <h1 className="text-4xl font-semibold leading-[1.07] tracking-tight text-[#24312c] sm:text-5xl lg:text-6xl">
              {professional.name}
            </h1>

            {(hasProfession || hasCro) && (
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-[#315c4f]">
                {hasProfession && (
                  <span>{professional.profession}</span>
                )}

                {hasProfession && hasCro && (
                  <span aria-hidden="true">•</span>
                )}

                {hasCro && (
                  <span>CRO {professional.cro}</span>
                )}
              </div>
            )}

            <p className="mt-6 max-w-lg text-base leading-7 text-[#68736e] sm:text-lg sm:leading-8">
              {professional.presentation.short}
            </p>

            <AppointmentButton className="mt-8 inline-flex items-center justify-center rounded-full bg-[#315c4f] px-6 py-3.5 text-sm font-semibold !text-white transition hover:bg-[#23463c]">
              {page.hero.contactButton}
            </AppointmentButton>
          </div>

          <div className="relative">
            {professional.images.profile ? (
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={professional.images.profile}
                  alt={professional.name}
                  className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[560px]"
                />
              </div>
            ) : (
              <div className="flex h-[430px] w-full items-center justify-center rounded-[2rem] bg-[#dfe9e4] sm:h-[520px] lg:h-[560px]">
                <div className="max-w-xs px-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/70 text-[#315c4f]">
                    <Stethoscope
                      size={27}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-5 text-sm font-semibold text-[#315c4f]">
                    {page.hero.imagePlaceholder.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#68736e]">
                    {page.hero.imagePlaceholder.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {(hasAbout || hasPhilosophy) && (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                {page.about.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              {hasAbout && (
                <p className="text-xl leading-9 text-[#4f5b54] sm:text-2xl sm:leading-10">
                  {professional.presentation.about}
                </p>
              )}

              {hasPhilosophy && (
                <div className="mt-10 border-l-2 border-[#315c4f] pl-6">
                  <p className="text-base leading-7 text-[#68736e]">
                    {professional.presentation.philosophy}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {hasProfessionalDetails && (
        <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                {page.professionalJourney.eyebrow}
              </p>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl lg:text-5xl">
                {page.professionalJourney.title}

                <span className="block text-[#68736e]">
                  {page.professionalJourney.titleHighlight}
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
              {hasEducation && (
                <article className="rounded-[1.75rem] border border-[#dfddd6] bg-white p-7 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <GraduationCap
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#24312c]">
                    {page.professionalJourney.labels.education}
                  </h3>

                  <div className="mt-4 space-y-1 text-sm leading-6 text-[#68736e]">
                    {professional.education.degree && (
                      <p className="font-semibold text-[#24312c]">
                        {professional.education.degree}
                      </p>
                    )}

                    {professional.education.institution && (
                      <p>
                        {professional.education.institution}
                      </p>
                    )}

                    {professional.education.graduationYear && (
                      <p>
                        {page.professionalJourney.labels.graduation}:{' '}
                        {professional.education.graduationYear}
                      </p>
                    )}
                  </div>
                </article>
              )}

              {hasExperience && (
                <article className="rounded-[1.75rem] border border-[#dfddd6] bg-white p-7 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                    <HeartHandshake
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#24312c]">
                    {page.professionalJourney.labels.experience}
                  </h3>

                  {professional.experience.years && (
                    <p className="mt-4 font-semibold text-[#24312c]">
                      {professional.experience.years}
                    </p>
                  )}

                  {professional.experience.description && (
                    <p className="mt-2 text-sm leading-6 text-[#68736e]">
                      {professional.experience.description}
                    </p>
                  )}
                </article>
              )}
            </div>

            {hasSpecializations && (
              <div className="mt-12">
                <div className="mb-6 flex items-center gap-3">
                  <Award
                    size={21}
                    strokeWidth={1.7}
                    className="text-[#315c4f]"
                  />

                  <h3 className="text-xl font-semibold text-[#24312c]">
                    {page.professionalJourney.labels.specializations}
                  </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {professional.specializations.map(
                    (specialization) => (
                      <article
                        key={specialization.id}
                        className="rounded-[1.5rem] border border-[#dfddd6] bg-white p-6"
                      >
                        <h4 className="font-semibold text-[#24312c]">
                          {specialization.title}
                        </h4>

                        {specialization.institution && (
                          <p className="mt-2 text-sm text-[#315c4f]">
                            {specialization.institution}
                          </p>
                        )}

                        {specialization.description && (
                          <p className="mt-3 text-sm leading-6 text-[#68736e]">
                            {specialization.description}
                          </p>
                        )}
                      </article>
                    ),
                  )}
                </div>
              </div>
            )}

            {hasCourses && (
              <div className="mt-12">
                <div className="mb-6 flex items-center gap-3">
                  <BookOpen
                    size={21}
                    strokeWidth={1.7}
                    className="text-[#315c4f]"
                  />

                  <h3 className="text-xl font-semibold text-[#24312c]">
                    {page.professionalJourney.labels.courses}
                  </h3>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-[#dfddd6] bg-white">
                  {professional.courses.map(
                    (course, index) => (
                      <article
                        key={course.id}
                        className={`grid gap-3 p-6 sm:grid-cols-[100px_1fr] sm:gap-6 sm:p-7 ${
                          index !==
                          professional.courses.length - 1
                            ? 'border-b border-[#dfddd6]'
                            : ''
                        }`}
                      >
                        <div>
                          {course.year && (
                            <span className="text-sm font-semibold text-[#315c4f]">
                              {course.year}
                            </span>
                          )}
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#24312c]">
                            {course.title}
                          </h4>

                          {course.institution && (
                            <p className="mt-1 text-sm text-[#68736e]">
                              {course.institution}
                            </p>
                          )}

                          {course.description && (
                            <p className="mt-3 text-sm leading-6 text-[#68736e]">
                              {course.description}
                            </p>
                          )}
                        </div>
                      </article>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {therapyAreas.length > 0 && (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315c4f]">
                  {page.careAreas.eyebrow}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#24312c] sm:text-4xl">
                  {page.careAreas.title}

                  <span className="text-[#68736e]">
                    {' '}
                    {page.careAreas.titleHighlight}
                  </span>
                </h2>

                <div className="mt-9 border-t border-[#dfddd6]">
                  <div className="flex items-start gap-4 border-b border-[#dfddd6] py-5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7.2 3.5c1.5 0 2.6.8 4.8.8s3.3-.8 4.8-.8c2.7 0 4.7 2.3 4.2 5.2-.4 2.2-1.5 3.8-2.16.4-.7 3-1.2 5.4-2.8 5.4-1.4 0-1.5-2.3-2.1-4.2-.4-1.3-.9-2-2-2s-1.6.7-2 2c-.6 1.9-.7 4.2-2.1 4.2-1.6 0-2.1-2.4-2.8-5.4-.6-2.6-1.7-4.2-2.1-6.4-.5-2.9 1.5-5.2 4.2-5.2Z" />
                      </svg>
                    </div>

                    <div>
                      <p className="font-semibold text-[#24312c]">
                        {page.careAreas.dentistryLabel}
                      </p>
                    </div>
                  </div>

                  {therapyAreas.map((therapy) => (
                    <div
                      key={therapy.name}
                      className="flex items-start gap-4 border-b border-[#dfddd6] py-5"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dfe9e4] text-[#315c4f]">
                        <HeartHandshake size={16} />
                      </div>

                      <div>
                        <p className="font-semibold text-[#24312c]">
                          {therapy.name}
                        </p>

                        {therapy.qualification && (
                          <p className="mt-1 text-sm leading-6 text-[#68736e]">
                            {therapy.qualification}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#315c4f] py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
              {page.finalCTA.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {page.finalCTA.title}

              <span className="block text-white/55">
                {page.finalCTA.titleHighlight}
              </span>
            </h2>
          </div>

          <AppointmentButton className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-[#dfe9e4]">
            <span style={{ color: '#24312c' }}>
              {page.finalCTA.buttonLabel}
            </span>
          </AppointmentButton>
        </div>
      </section>
    </main>
  )
}

export default Clinica