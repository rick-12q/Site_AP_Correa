import TreatmentPage from '../../components/TreatmentPage'

function Moxabustao() {
  return (
    <TreatmentPage
      category="Terapias integrativas"
      categoryHref="/terapias"
      title="Moxabustão"
      subtitle="Calor e tradição como prática complementar."
      description="A moxabustão é uma técnica tradicional que utiliza estímulo térmico em pontos específicos e pode integrar uma abordagem complementar de cuidado."
      image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Ambiente para terapias integrativas"
      benefits={[
        'Utiliza estímulo térmico de forma controlada.',
        'Pode ser combinada com outras práticas integrativas.',
        'Os pontos utilizados são definidos conforme o atendimento.',
        'A aplicação considera as necessidades individuais.',
      ]}
    />
  )
}

export default Moxabustao