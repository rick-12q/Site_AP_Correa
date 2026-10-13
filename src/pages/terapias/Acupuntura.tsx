import TreatmentPage from '../../components/TreatmentPage'
import { getTreatmentById } from '../../config/treatments'

function Acupuntura() {
  const treatment = getTreatmentById('acupuntura')

  if (!treatment) {
    return null
  }

  return (
    <TreatmentPage
      category="Terapias integrativas"
      categoryHref="/terapias"
      title={treatment.title}
      subtitle={treatment.subtitle}
      description={treatment.description}
      image={treatment.image}
      imageAlt={treatment.imageAlt}
      benefits={treatment.benefits}
    />
  )
}

export default Acupuntura