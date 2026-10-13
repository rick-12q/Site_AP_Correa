import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { clinicConfig } from '../config/clinic'

type AppointmentButtonProps = {
  children: ReactNode
  className?: string
}

function AppointmentButton({
  children,
  className = '',
}: AppointmentButtonProps) {
  const whatsapp = clinicConfig.contact.whatsapp.trim()

  if (whatsapp) {
    const phone = whatsapp.replace(/\D/g, '')

    const message = encodeURIComponent(
      'Olá! Gostaria de obter informações sobre agendamento.',
    )

    const whatsappUrl = `https://wa.me/${phone}?text=${message}`

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to="/contato"
      className={className}
    >
      {children}
    </Link>
  )
}

export default AppointmentButton