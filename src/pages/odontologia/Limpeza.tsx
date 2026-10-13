import TreatmentPage from '../../components/TreatmentPage'
import { getTreatmentById } from '../../config/treatments'

function Limpeza() {
  const treatment = getTreatmentById('limpeza')

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

export default Limpeza