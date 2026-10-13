export const homeConfig = {
  hero: {
    eyebrow: 'Odontologia e terapias integrativas',

    title: 'Cuidado que acolhe,',
    titleHighlight: 'saúde que transforma.',

    description:
      'Encontre o atendimento que você procura e conheça uma proposta de cuidado individualizado para sua saúde e bem-estar.',

    buttons: {
      treatments: 'Ver tratamentos',
      appointment: 'Agendar atendimento',
      clinic: 'Conheça a clínica',
    },

    highlights: [
      'Atendimento individualizado',
      'Odontologia',
      'Terapias integrativas',
    ],

    image: {
      src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85',
      alt: 'Atendimento na clínica',
    },

    imageCard: {
      title: 'Cuidado individualizado',
      description:
        'Cada atendimento começa entendendo você e suas necessidades.',
    },
  },

  treatments: {
    eyebrow: 'Tratamentos e terapias',

    title: 'Como podemos',
    titleHighlight: 'cuidar de você?',

    description:
      'Acesse diretamente o atendimento que procura para conhecer melhor cada tratamento ou terapia disponível na clínica.',

    viewAllLabel: 'Ver todos',

    groups: {
      dentistry: {
        title: 'Odontologia',
        description:
          'Prevenção, saúde e cuidado com o sorriso.',
        href: '/odontologia',
      },

      therapies: {
        title: 'Terapias integrativas',
        description:
          'Práticas complementares voltadas ao cuidado e bem-estar.',
        href: '/terapias',
      },
    },
  },

  aboutClinic: {
    eyebrow: 'A clínica',

    title: 'Cuidar da saúde também é',
    titleHighlight: 'cuidar de cada detalhe.',

    description:
      'A clínica nasceu com a proposta de oferecer um atendimento próximo e individualizado, reunindo odontologia e terapias integrativas em um ambiente tranquilo e acolhedor.',

    secondaryDescription:
      'Mais do que tratar sintomas, buscamos compreender cada pessoa, suas necessidades e seu momento, construindo um cuidado que considera saúde, bem-estar e qualidade de vida.',

    image: {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85',
      alt: 'Ambiente acolhedor da clínica',
    },

    imageCard: {
      description:
        'Um espaço pensado para que cada pessoa se sinta',
      highlight:
        'acolhida, ouvida e bem cuidada.',
    },

    highlights: [
      {
        id: 'human',
        label: 'Atendimento humano',
      },
      {
        id: 'integrated',
        label: 'Visão integrada',
      },
      {
        id: 'individual',
        label: 'Cuidado individual',
      },
    ],

    button: {
      label: 'Conheça nossa história',
      href: '/clinica',
    },
  },

  carePhilosophy: {
    eyebrow: 'Nossa forma de cuidar',

    title: 'O cuidado começa',
    titleHighlight: 'antes do tratamento.',

    description:
      'Acreditamos que uma boa experiência de cuidado nasce da combinação entre conhecimento, atenção e compreensão de cada pessoa.',

    principles: [
      {
        number: '01',
        title: 'Escuta individual',
        description:
          'Cada pessoa tem necessidades, histórias e objetivos diferentes. Por isso, todo cuidado começa com uma escuta atenta e próxima.',
      },
      {
        number: '02',
        title: 'Cuidado integrado',
        description:
          'Odontologia e terapias integrativas convivem em uma proposta que considera saúde, bem-estar e qualidade de vida de forma conjunta.',
      },
      {
        number: '03',
        title: 'Atendimento humano',
        description:
          'Conhecimento técnico e atenção aos detalhes se unem a um atendimento acolhedor, respeitoso e construído com tranquilidade.',
      },
    ],
  },

  appointmentCTA: {
    eyebrow: 'Agendamento',

    title: 'Seu cuidado pode',
    titleHighlight: 'começar por aqui.',

    description:
      'Entre em contato para conversar sobre suas necessidades e consultar os horários disponíveis para atendimento.',

    buttonLabel: 'Agendar atendimento',
  },

  contactLocation: {
    eyebrow: 'Contato e localização',

    title: 'Estamos em',

    labels: {
      location: 'Localização',
      openingHours: 'Horários',
      email: 'E-mail',
    },

    buttons: {
      whatsapp: 'WhatsApp',
      contact: 'Ver contato',
    },
  },
} as const