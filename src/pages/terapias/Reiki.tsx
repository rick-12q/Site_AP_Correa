import TreatmentPage from '../../components/TreatmentPage'

function Reiki() {
  return (
    <TreatmentPage
      category="Terapias integrativas"
      categoryHref="/terapias"
      title="Reiki"
      subtitle="Um momento dedicado ao equilíbrio e ao bem-estar."
      description="O Reiki é uma prática integrativa utilizada como recurso complementar voltado ao relaxamento e à promoção do bem-estar."
      image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Ambiente tranquilo para terapia integrativa"
      benefits={[
        'Prática voltada à promoção de relaxamento e bem-estar.',
        'Pode integrar uma abordagem complementar de cuidado.',
        'O atendimento é conduzido de forma individualizada.',
        'Pode ser associado a outros cuidados conforme as necessidades de cada pessoa.',
      ]}
    />
  )
}

export default Reiki