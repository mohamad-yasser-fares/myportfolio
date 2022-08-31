import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/layouts/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="coronaHelden">
      <Container>
        <Title>Corona Helden</Title>
        <P>
          {''}
          Mobile App developed during a practical training at the Institute for
          Software and Systems Engineering, TU Clausthal. On the app
          CoronaHelden people support each other. Here you can find requests for
          help from people who need something but cannot leave their homes
          themselves. As a person seeking help you can post requests here and
          people in your vicinity or in a certain proximity will be informed. As
          a help provider you can display requests in a selected distance from
          your location subscribe and answer them.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Android, Spring-Boot Java</span>
          </ListItem>
        </List>

        <WorkImage src="/works/ca1.jpg" alt="coronaHelden" />
        <WorkImage src="/works/ca2.jpg" alt="coronaHelden" />
        <WorkImage src="/works/ca3.jpg" alt="coronaHelden" />
        <WorkImage src="/works/ca4.jpg" alt="coronaHelden" />
      </Container>
    </Layout>
  )
}
export default Work
