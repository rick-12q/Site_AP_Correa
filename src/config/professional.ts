export type ProfessionalCourse = {
  id: string
  title: string
  institution: string
  year: string
  description: string
}

export type ProfessionalSpecialization = {
  id: string
  title: string
  institution: string
  description: string
}

export const professionalConfig = {
  name: 'Ana Paula S. Corrêa',

  profession: '',
  cro: '',

  presentation: {
    short:
      'Atendimento individualizado com uma visão integrada de saúde e bem-estar.',

    about: '',

    philosophy: '',
  },

  education: {
    degree: '',
    institution: '',
    graduationYear: '',
  },

  experience: {
    years: '',
    description: '',
  },

  specializations: [] as ProfessionalSpecialization[],

  courses: [] as ProfessionalCourse[],

  therapies: {
    reiki: {
      enabled: true,
      qualification: '',
    },

    acupuncture: {
      enabled: true,
      qualification: '',
    },

    auriculotherapy: {
      enabled: true,
      qualification: '',
    },

    moxibustion: {
      enabled: true,
      qualification: '',
    },
  },

  images: {
    profile: '',
    clinic: '',
  },
} as const