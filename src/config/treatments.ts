export type TreatmentCategory = 'odontologia' | 'terapias'

export type TreatmentConfig = {
  id: string
  category: TreatmentCategory

  title: string
  shortDescription: string
  overviewDescription: string
  subtitle: string
  description: string

  slug: string
  href: string

  image: string
  imageAlt: string

  benefits: string[]

  enabled: boolean
}

export const treatmentsConfig: TreatmentConfig[] = [
  {
    id: 'limpeza',
    category: 'odontologia',

    title: 'Limpeza e prevenção',

    shortDescription:
      'Prevenção e manutenção da saúde bucal.',

    overviewDescription:
      'Acompanhamento preventivo para preservar a saúde bucal, prevenir problemas e manter o sorriso saudável.',

    subtitle:
      'Prevenir também é uma forma de cuidar.',

    description:
      'O acompanhamento preventivo contribui para a manutenção da saúde bucal e permite identificar alterações antes que se tornem problemas maiores.',

    slug: 'limpeza',
    href: '/odontologia/limpeza',

    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Atendimento odontológico preventivo',

    benefits: [
      'Auxilia na manutenção da saúde bucal.',
      'Contribui para a prevenção de problemas odontológicos.',
      'Permite acompanhar mudanças na saúde dos dentes e gengivas.',
      'Possibilita orientações individualizadas sobre cuidados de higiene bucal.',
    ],

    enabled: true,
  },

  {
    id: 'restauracao',
    category: 'odontologia',

    title: 'Restauração',

    shortDescription:
      'Recuperação da estrutura e função dos dentes.',

    overviewDescription:
      'Recuperação de dentes comprometidos, buscando devolver função, conforto e uma aparência natural.',

    subtitle:
      'Recuperar função, conforto e naturalidade.',

    description:
      'A restauração odontológica é utilizada para recuperar estruturas dentais comprometidas, buscando preservar o dente e restabelecer sua função.',

    slug: 'restauracao',
    href: '/odontologia/restauracao',

    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Atendimento odontológico',

    benefits: [
      'Auxilia na recuperação de estruturas dentais comprometidas.',
      'Contribui para restabelecer a função do dente.',
      'Ajuda a preservar estruturas dentais saudáveis.',
      'O planejamento considera as necessidades individuais de cada caso.',
    ],

    enabled: true,
  },

  {
    id: 'canal',
    category: 'odontologia',

    title: 'Tratamento de canal',

    shortDescription:
      'Cuidado para preservar o dente e recuperar o conforto.',

    overviewDescription:
      'Cuidado direcionado à parte interna do dente, com o objetivo de controlar infecções e preservar o elemento dental.',

    subtitle:
      'Cuidado para preservar o dente e recuperar o conforto.',

    description:
      'O tratamento de canal atua na parte interna do dente e pode ser necessário quando essa região apresenta inflamação, infecção ou comprometimento.',

    slug: 'canal',
    href: '/odontologia/canal',

    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Procedimento odontológico',

    benefits: [
      'Busca preservar o dente sempre que houver indicação clínica.',
      'Trata alterações que atingem a parte interna do dente.',
      'Pode contribuir para controlar quadros de dor relacionados à polpa dental.',
      'A necessidade do tratamento é definida após avaliação profissional.',
    ],

    enabled: true,
  },

  {
    id: 'ortodontia',
    category: 'odontologia',

    title: 'Ortodontia',

    shortDescription:
      'Alinhamento, função e harmonia do sorriso.',

    overviewDescription:
      'Planejamento individualizado para melhorar o alinhamento dos dentes, a função e a harmonia do sorriso.',

    subtitle:
      'Alinhamento com planejamento e acompanhamento.',

    description:
      'A ortodontia trabalha o posicionamento dos dentes e a relação entre as estruturas envolvidas, buscando melhorias funcionais e harmonia do sorriso.',

    slug: 'ortodontia',
    href: '/odontologia/ortodontia',

    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Avaliação odontológica',

    benefits: [
      'Auxilia na correção do posicionamento dos dentes.',
      'Pode contribuir para melhorias funcionais da mordida.',
      'O tratamento é planejado de acordo com cada caso.',
      'O acompanhamento periódico permite avaliar a evolução do tratamento.',
    ],

    enabled: true,
  },

  {
    id: 'reiki',
    category: 'terapias',

    title: 'Reiki',

    shortDescription:
      'Prática voltada ao relaxamento e bem-estar.',

    overviewDescription:
      'Prática integrativa voltada ao relaxamento, ao equilíbrio e à promoção do bem-estar.',

    subtitle:
      'Um momento dedicado ao equilíbrio e ao bem-estar.',

    description:
      'O Reiki é uma prática integrativa utilizada como recurso complementar voltado ao relaxamento e à promoção do bem-estar.',

    slug: 'reiki',
    href: '/terapias/reiki',

    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Ambiente tranquilo para terapia integrativa',

    benefits: [
      'Prática voltada à promoção de relaxamento e bem-estar.',
      'Pode integrar uma abordagem complementar de cuidado.',
      'O atendimento é conduzido de forma individualizada.',
      'Pode ser associado a outros cuidados conforme as necessidades de cada pessoa.',
    ],

    enabled: true,
  },

  {
    id: 'acupuntura',
    category: 'terapias',

    title: 'Acupuntura',

    shortDescription:
      'Prática tradicional dentro do cuidado integrativo.',

    overviewDescription:
      'Técnica tradicional que utiliza a estimulação de pontos específicos como parte de uma abordagem integrativa de cuidado.',

    subtitle:
      'Uma prática tradicional dentro de um cuidado integrativo.',

    description:
      'A acupuntura utiliza a estimulação de pontos específicos e pode fazer parte de uma abordagem complementar de cuidado de acordo com as necessidades individuais.',

    slug: 'acupuntura',
    href: '/terapias/acupuntura',

    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Atendimento em terapia integrativa',

    benefits: [
      'Utiliza pontos específicos definidos durante o atendimento.',
      'Pode integrar uma abordagem complementar de cuidado.',
      'A condução considera as necessidades individuais.',
      'A indicação e o acompanhamento são definidos durante a avaliação.',
    ],

    enabled: true,
  },

  {
    id: 'auriculoterapia',
    category: 'terapias',

    title: 'Auriculoterapia',

    shortDescription:
      'Estímulo de pontos específicos da região auricular.',

overviewDescription:
  'Prática que utiliza pontos específicos da orelha como recurso complementar para o cuidado e o equilíbrio do organismo.',

    subtitle:
      'Estímulos específicos como parte de um cuidado complementar.',

    description:
      'A auriculoterapia utiliza pontos localizados na orelha e pode ser empregada como prática complementar dentro de uma proposta individualizada de cuidado.',

    slug: 'auriculoterapia',
    href: '/terapias/auriculoterapia',

    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Atendimento de terapia integrativa',

    benefits: [
      'Utiliza pontos específicos da região auricular.',
      'Pode integrar estratégias complementares de cuidado.',
      'O atendimento considera as necessidades de cada pessoa.',
      'A aplicação é definida de acordo com a avaliação realizada.',
    ],

    enabled: true,
  },

  {
    id: 'moxabustao',
    category: 'terapias',

    title: 'Moxabustão',

    shortDescription:
      'Estímulo térmico como prática complementar.',

    overviewDescription:
      'Técnica tradicional baseada na aplicação controlada de calor em pontos específicos como prática complementar.',

    subtitle:
      'Calor e tradição como prática complementar.',

    description:
      'A moxabustão é uma técnica tradicional que utiliza estímulo térmico em pontos específicos e pode integrar uma abordagem complementar de cuidado.',

    slug: 'moxabustao',
    href: '/terapias/moxabustao',

    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85',

    imageAlt:
      'Ambiente para terapias integrativas',

    benefits: [
      'Utiliza estímulo térmico de forma controlada.',
      'Pode ser combinada com outras práticas integrativas.',
      'Os pontos utilizados são definidos conforme o atendimento.',
      'A aplicação considera as necessidades individuais.',
    ],

    enabled: true,
  },
]

export function getTreatmentById(id: string) {
  return treatmentsConfig.find(
    (treatment) =>
      treatment.id === id && treatment.enabled,
  )
}

export function getTreatmentsByCategory(
  category: TreatmentCategory,
) {
  return treatmentsConfig.filter(
    (treatment) =>
      treatment.category === category &&
      treatment.enabled,
  )
}