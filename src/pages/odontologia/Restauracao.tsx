import TreatmentPage from '../../components/TreatmentPage'

function Restauracao() {
  return (
    <TreatmentPage
      category="Odontologia"
      categoryHref="/odontologia"
      title="Restauração"
      subtitle="Recuperar função, conforto e naturalidade."
      description="A restauração odontológica é utilizada para recuperar estruturas dentais comprometidas, buscando preservar o dente e restabelecer sua função."
      image="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Atendimento odontológico"
      benefits={[
        'Auxilia na recuperação de estruturas dentais comprometidas.',
        'Contribui para restabelecer a função do dente.',
        'Ajuda a preservar estruturas dentais saudáveis.',
        'O planejamento considera as necessidades individuais de cada caso.',
      ]}
    />
  )
}

export default Restauracao