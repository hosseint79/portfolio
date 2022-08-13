import { InView } from 'react-intersection-observer'
import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { useNavigationContext } from '../Layout/Layout/Layout'
import { ContactMeForm } from './ContactMeForm/ContactMeForm'
import { ContactMeInformation } from './ContactMeInformation/ContactMeInformation'

function ContactMe() {
  const { setActiveNavigation } = useNavigationContext()

  return (
    <InView
      as="div"
      onChange={inView => {
        setActiveNavigation(prev => {
          return prev.map((item, index) => {
            return index === 2 ? inView : item
          })
        })
      }}
    >
      <Container>
        <div id="contact" className="lg:px-16">
          <SectionHeader title="Contact Me" caption="Get in touch" />
          <div className="grid grid-cols-5 gap-6">
            <ContactMeInformation />
            <ContactMeForm />
          </div>
        </div>
      </Container>
    </InView>
  )
}

export { ContactMe }
