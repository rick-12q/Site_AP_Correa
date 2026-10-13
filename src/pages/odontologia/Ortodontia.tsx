import TreatmentPage from '../../components/TreatmentPage'

function Ortodontia() {
  return (
    <TreatmentPage
      category="Odontologia"
      categoryHref="/odontologia"
      title="Ortodontia"
      subtitle="Alinhamento com planejamento e acompanhamento."
      description="A ortodontia trabalha o posicionamento dos dentes e a relação entre as estruturas envolvidas, buscando melhorias funcionais e harmonia do sorriso."
      image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Avaliação odontológica"
      benefits={[
        'Auxilia na correção do posicionamento dos dentes.',
        'Pode contribuir para melhorias funcionais da mordida.',
        'O tratamento é planejado de acordo com cada caso.',
        'O acompanhamento periódico permite avaliar a evolução do tratamento.',
      ]}
    />
  )
}

export default Ortodontia