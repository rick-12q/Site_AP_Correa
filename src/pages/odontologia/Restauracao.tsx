import TreatmentPage from '../../components/TreatmentPage'
import { getTreatmentById } from '../../config/treatments'

function Restauracao() {
  const treatment = getTreatmentById('restauracao')

  if (!treatment) {
    return null
  }

  return (
    <TreatmentPage
      category="Odontologia"
      categoryHref="/odontologia"
      title={treatment.title}
      subtitle={treatment.subtitle}
      description={treatment.description}
      image={treatment.image}
      imageAlt={treatment.imageAlt}
      benefits={treatment.benefits}
    />
  )
}

export default Restauracao