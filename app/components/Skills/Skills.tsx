import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { SkillsContainer } from './SkillsContainer/SkillsContainer'
import { Container } from '../common/Container/Container'
import { ShortInfo } from './ShortInfo/ShortInfo'
import { InView } from 'react-intersection-observer'
import { useNavigationContext } from '../Layout/Layout'

function Skills() {
  const { setActiveNavigation } = useNavigationContext()

  return (
    <InView
      as="div"
      onChange={inView => {
        setActiveNavigation(prev => {
          return prev.map((item, index) => {
            return index === 1 ? inView : item
          })
        })
      }}
    >
      <section className="w-full" id="skills">
        <SectionHeader title="Skills" caption="My technical level" mb="mb-10" />
        <Container>
          <ShortInfo />
          <SkillsContainer />
        </Container>
      </section>
    </InView>
  )
}

export { Skills }
