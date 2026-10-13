import TreatmentPage from '../../components/TreatmentPage'

function Canal() {
  return (
    <TreatmentPage
      category="Odontologia"
      categoryHref="/odontologia"
      title="Tratamento de canal"
      subtitle="Cuidado para preservar o dente e recuperar o conforto."
      description="O tratamento de canal atua na parte interna do dente e pode ser necessário quando essa região apresenta inflamação, infecção ou comprometimento."
      image="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Procedimento odontológico"
      benefits={[
        'Busca preservar o dente sempre que houver indicação clínica.',
        'Trata alterações que atingem a parte interna do dente.',
        'Pode contribuir para controlar quadros de dor relacionados à polpa dental.',
        'A necessidade do tratamento é definida após avaliação profissional.',
      ]}
    />
  )
}

export default Canal