import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-[#e5e1d8] bg-[#2f3a35] text-[#f8f6f1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Link to="/" className="text-lg font-semibold tracking-tight">
            Clínica AP Corrêa
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#d5d8d3]">
            Odontologia e terapias integrativas em um ambiente acolhedor,
            pensado para cuidar de você de forma integral.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e5e1d8]">
            Navegação
          </h2>

          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-[#d5d8d3]">
            <Link to="/" className="transition hover:text-white">
              Início
            </Link>
            <Link to="/clinica" className="transition hover:text-white">
              A Clínica
            </Link>
            <Link to="/odontologia" className="transition hover:text-white">
              Odontologia
            </Link>
            <Link to="/terapias" className="transition hover:text-white">
              Terapias
            </Link>
            <Link to="/contato" className="transition hover:text-white">
              Contato
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e5e1d8]">
            Atendimento
          </h2>

          <div className="mt-4 space-y-2.5 text-sm leading-6 text-[#d5d8d3]">
            <p>Segunda a sexta</p>
            <p>08:00 às 18:00</p>
            <p>Atendimento mediante agendamento.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#52615a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#bfc5c0] sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Clínica AP Corrêa. Todos os direitos reservados.</p>

          <p>Site desenvolvido para apresentação da clínica.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer