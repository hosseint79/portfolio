import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { ContactMeForm } from './ContactMeForm/ContactMeForm'
import { ContactMeInformation } from './ContactMeInformation/ContactMeInformation'

function ContactMe() {
  return (
    <Container>
      <div id="contact" className="lg:px-16">
        <SectionHeader title="Contact Me" caption="Get in touch" />
        <div className="grid grid-cols-5 gap-6">
          <ContactMeInformation />
          <ContactMeForm />
        </div>
      </div>
    </Container>
  )
}

export { ContactMe }
