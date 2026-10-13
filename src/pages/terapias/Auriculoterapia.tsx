import TreatmentPage from '../../components/TreatmentPage'

function Auriculoterapia() {
  return (
    <TreatmentPage
      category="Terapias integrativas"
      categoryHref="/terapias"
      title="Auriculoterapia"
      subtitle="Estímulos específicos como parte de um cuidado complementar."
      description="A auriculoterapia utiliza pontos localizados na orelha e pode ser empregada como prática complementar dentro de uma proposta individualizada de cuidado."
      image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Atendimento de terapia integrativa"
      benefits={[
        'Utiliza pontos específicos da região auricular.',
        'Pode integrar estratégias complementares de cuidado.',
        'O atendimento considera as necessidades de cada pessoa.',
        'A aplicação é definida de acordo com a avaliação realizada.',
      ]}
    />
  )
}

export default Auriculoterapia