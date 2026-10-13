export const clinicConfig = {
  name: 'Clínica AP Corrêa',

  contact: {
    whatsapp: '',
    email: '',
  },

  address: {
    label: "Unidade Principal",
    street: 'Rua Santa Teresinha',
    number: 'XXX',
    complement: '',
    neighborhood: 'Santa Teresinha',
    city: 'Sorocaba',
    state: 'SP',
    zipCode: 'XXXXX-XXX',

    latitude: -23.4996023,
    longitude: -47.472962,
  },

  openingHours: {
    weekdays: {
      label: 'Segunda a sexta',
      hours: '08:00 às 17:00',
    },

    saturday: {
      label: 'Sábado',
      hours: 'Até 12:00, mediante agendamento',
    },

    sunday: {
      label: 'Domingo',
      hours: 'Fechado',
    },
  },

  maps: {
    url: 'https://www.google.com/maps/@-23.4996023,-47.472962,587a,90y,297.49h,76.03t/data=!3m7!1e1!3m5!1sJKJqGsi46udp476-0zUVvg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.96884012325404%26panoid%3DJKJqGsi46udp476-0zUVvg%26yaw%3D297.486485514586!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D',

    embedUrl:
      'https://www.google.com/maps?q=-23.4996023,-47.472962&z=16&output=embed',
  },
} as const