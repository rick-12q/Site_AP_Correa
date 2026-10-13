import AboutClinic from '../components/home/AboutClinic'
import AppointmentCTA from '../components/home/AppointmentCTA'
import CarePhilosophy from '../components/home/CarePhilosophy'
import ContactLocation from '../components/home/ContactLocation'
import Hero from '../components/home/Hero'
import ServicesIntro from '../components/home/ServicesIntro'
import Treatments from '../components/home/Treatments'

function Home() {
  return (
    <>
      <Hero />
      <ServicesIntro />
      <AboutClinic />
      <Treatments />
      <CarePhilosophy />
      <AppointmentCTA />
      <ContactLocation />
    </>
  )
}

export default Home