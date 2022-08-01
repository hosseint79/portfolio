import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { SkillsContainer } from './SkillsContainer/SkillsContainer'
import { Container } from '../common/Container/Container'
import { ShortInfo } from './ShortInfo/ShortInfo'

function Skills() {
  return (
    <section className="w-full" id="skills">
      <SectionHeader title="Skills" caption="My technical level" mb="mb-10" />
      <Container>
        <ShortInfo />
        <SkillsContainer />
      </Container>
    </section>
  )
}

export { Skills }
