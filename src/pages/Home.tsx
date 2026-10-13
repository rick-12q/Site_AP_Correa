import ScrollReveal from '../components/ScrollReveal'
import AboutClinic from '../components/home/AboutClinic'
import AppointmentCTA from '../components/home/AppointmentCTA'
import CarePhilosophy from '../components/home/CarePhilosophy'
import ContactLocation from '../components/home/ContactLocation'
import Hero from '../components/home/Hero'
import Reviews from '../components/home/Reviews'
import Treatments from '../components/home/Treatments'

function Home() {
  return (
    <>
      <ScrollReveal direction="none">
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <Treatments />
      </ScrollReveal>

      <ScrollReveal>
        <AboutClinic />
      </ScrollReveal>

      <ScrollReveal>
        <Reviews />
      </ScrollReveal>

      <ScrollReveal>
        <CarePhilosophy />
      </ScrollReveal>

      <ScrollReveal>
        <AppointmentCTA />
      </ScrollReveal>

      <ScrollReveal>
        <ContactLocation />
      </ScrollReveal>
    </>
  )
}

export default Home