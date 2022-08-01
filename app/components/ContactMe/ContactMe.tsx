import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { ContactMeForm } from './ContactMeForm/ContactMeForm'
import { ContactMeInformation } from './ContactMeInformation/ContactMeInformation'

function ContactMe() {
  return (
    <div id="contact">
      <Container>
        <SectionHeader title="Contact Me" caption="Get in touch" />
        <ContactMeInformation />
        <ContactMeForm />
      </Container>
    </div>
  )
}

export { ContactMe }
