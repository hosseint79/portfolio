import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { SkillsContainer } from './SkillsContainer/SkillsContainer'
import { Container } from '../common/Container/Container'
import { ShortInfo } from './ShortInfo/ShortInfo'

function Skills() {
  return (
    <section className="my-6 w-full" id="skills">
      <SectionHeader title="Skills" caption="My technical level" />
      <Container>
        <ShortInfo />
        <SkillsContainer />
      </Container>
    </section>
  )
}

export { Skills }
