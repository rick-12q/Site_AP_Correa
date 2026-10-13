import { HashRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import Clinica from './pages/Clinica'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Odontologia from './pages/Odontologia'
import Terapias from './pages/Terapias'
import Canal from './pages/odontologia/Canal'
import Limpeza from './pages/odontologia/Limpeza'
import Ortodontia from './pages/odontologia/Ortodontia'
import Restauracao from './pages/odontologia/Restauracao'
import Acupuntura from './pages/terapias/Acupuntura'
import Auriculoterapia from './pages/terapias/Auriculoterapia'
import Moxabustao from './pages/terapias/Moxabustao'
import Reiki from './pages/terapias/Reiki'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/odontologia" element={<Odontologia />} />
          <Route path="/odontologia/limpeza" element={<Limpeza />} />
          <Route path="/odontologia/restauracao" element={<Restauracao />} />
          <Route path="/odontologia/canal" element={<Canal />} />
          <Route path="/odontologia/ortodontia" element={<Ortodontia />} />

          <Route path="/terapias" element={<Terapias />} />
          <Route path="/terapias/reiki" element={<Reiki />} />
          <Route path="/terapias/acupuntura" element={<Acupuntura />} />
          <Route path="/terapias/auriculoterapia" element={<Auriculoterapia />} />
          <Route path="/terapias/moxabustao" element={<Moxabustao />} />

          <Route path="/clinica" element={<Clinica />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  )
}

export default App