import {Container} from '../common/Container/Container'
import {SectionHeader} from '../common/SectionHeader/SectionHeader'
import {ShortInfo} from './ShortInfo/ShortInfo'
import {SkillsContainer} from './SkillsContainer/SkillsContainer'

function Skills() {
  return (
    <section className="w-full my-6" id="skills">
      <SectionHeader title="Skills" caption="My technical level" />
      <Container>
        <ShortInfo />
        <SkillsContainer />
      </Container>
    </section>
  )
}

export {Skills}
