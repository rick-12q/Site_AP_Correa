import TreatmentPage from '../../components/TreatmentPage'
import { getTreatmentById } from '../../config/treatments'

function Ortodontia() {
  const treatment = getTreatmentById('ortodontia')

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

export default Ortodontia