import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/layouts/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Der Adler">
      <Container>
        <Title>
          Der Adler <Badge>2020</Badge>
        </Title>
        <P>
          {''}
          An arcade game developed with python during computer workshop at the
          university
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
        </List>

        <WorkImage src="/works/adler1.jpg" alt="Der Adler" />
        <WorkImage src="/works/adler2.jpg" alt="Der Adler" />
        <WorkImage src="/works/adler3.jpg" alt="Der Adler" />
      </Container>
    </Layout>
  )
}
export default Work
