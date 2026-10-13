export type Review = {
  id: string
  name: string
  text: string
  rating: number
  treatment?: string
  enabled: boolean
}

export const reviewsConfig = {
  section: {
    eyebrow: 'Avaliações',

    title: 'Experiências de quem',
    titleHighlight: 'já passou pela clínica.',

    label: 'Avaliações de pacientes',
  },

  reviews: [] as Review[],
} as const

export function getEnabledReviews(): Review[] {
  return reviewsConfig.reviews.filter(
    (review) => review.enabled,
  )
}