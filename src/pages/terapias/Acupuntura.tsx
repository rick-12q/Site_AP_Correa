import TreatmentPage from '../../components/TreatmentPage'

function Acupuntura() {
  return (
    <TreatmentPage
      category="Terapias integrativas"
      categoryHref="/terapias"
      title="Acupuntura"
      subtitle="Uma prática tradicional dentro de um cuidado integrativo."
      description="A acupuntura utiliza a estimulação de pontos específicos e pode fazer parte de uma abordagem complementar de cuidado de acordo com as necessidades individuais."
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Atendimento em terapia integrativa"
      benefits={[
        'Utiliza pontos específicos definidos durante o atendimento.',
        'Pode integrar uma abordagem complementar de cuidado.',
        'A condução considera as necessidades individuais.',
        'A indicação e o acompanhamento são definidos durante a avaliação.',
      ]}
    />
  )
}

export default Acupuntura