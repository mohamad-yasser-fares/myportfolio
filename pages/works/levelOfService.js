import { Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/layouts/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="levelOfService">
      <Container>
        <Title>Level of Service</Title>
        <P>
          The aim of the project was to calculate the variables of the
          evaluation method for an application of “Shared Spaces” in Bergedorf
          district in Hamburg city in Germany. The evaluation considered both
          metrics, traffic quality and traffic safety for road users.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
        </List>

        <WorkImage src="/works/los1.jpg" alt="levelOfService" />
        <WorkImage src="/works/los2.jpg" alt="levelOfService" />
        <WorkImage src="/works/los3.jpg" alt="levelOfService" />
      </Container>
    </Layout>
  )
}
export default Work
