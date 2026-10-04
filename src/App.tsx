import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Odontologia from './pages/Odontologia'
import Terapias from './pages/Terapias'
import Clinica from './pages/Clinica'
import Contato from './pages/Contato'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/odontologia" element={<Odontologia />} />
          <Route path="/terapias" element={<Terapias />} />
          <Route path="/clinica" element={<Clinica />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
