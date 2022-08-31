import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import thumbSharingBoxes from '../public/works/SharingBoxes2.png'
import thumbCoronaApp from '../public/works/coronaApp.png'
import thumbAdler from '../public/works/Adler.png'
import thumbLos from '../public/works/LOS.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="sharingBoxes"
            title="Sharing Boxes"
            thumbnail={thumbSharingBoxes}
          />
        </Section>

        <Section>
          <WorkGridItem
            id="coronaApp"
            title="Corona Helden"
            thumbnail={thumbCoronaApp}
          />
        </Section>

        <Section>
          <WorkGridItem
            id="endlessrunner"
            title="Der Adler"
            thumbnail={thumbAdler}
          />
        </Section>

        <Section>
          <WorkGridItem
            id="levelOfService"
            title="Level of service in shared spaces"
            thumbnail={thumbLos}
          />
        </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Works
