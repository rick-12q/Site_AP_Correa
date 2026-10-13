import TreatmentPage from '../../components/TreatmentPage'

function Limpeza() {
  return (
    <TreatmentPage
      category="Odontologia"
      categoryHref="/odontologia"
      title="Limpeza e prevenção"
      subtitle="Prevenir também é uma forma de cuidar."
      description="O acompanhamento preventivo contribui para a manutenção da saúde bucal e permite identificar alterações antes que se tornem problemas maiores."
      image="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Atendimento odontológico preventivo"
      benefits={[
        'Auxilia na manutenção da saúde bucal.',
        'Contribui para a prevenção de problemas odontológicos.',
        'Permite acompanhar mudanças na saúde dos dentes e gengivas.',
        'Possibilita orientações individualizadas sobre cuidados de higiene bucal.',
      ]}
    />
  )
}

export default Limpeza