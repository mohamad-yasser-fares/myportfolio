import {
  Container,
  Box,
  Heading,
  Link,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/layouts/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="sharingBoxes">
      <Container>
        <Title>
          sharingBoxes <Badge>2020</Badge>
        </Title>
        <P>
          Web App developed for the Institute for Software and Systems
          Engineering, TU Clausthal. This web application enables managing the
          bookings for boxes of students and teachers at the TU Clausthal. The
          application enables the renting of boxes for the exchange of packets,
          which are transported between the Institue of Software and System
          Engineering ISSE and the center of Digital Technologies. Further it
          allows the exchange of technical equipments such as e-bike
          accumulators. This functionality has boxes reserverd for teachers and
          also seperate boxes designated for students. Teachers are able to
          create groups and book a box for their groups. As for students, they
          can also share a booked box with their fellow students.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NodeJS, Spring-Boot Java</span>
          </ListItem>
        </List>

        <WorkImage src="/works/SharingBoxes1.jpg" alt="sharingBoxes" />
        <WorkImage src="/works/SharingBoxes2.png" alt="sharingBoxes" />
        <WorkImage src="/works/SharingBoxes3.jpg" alt="sharingBoxes" />
        <WorkImage src="/works/SharingBoxes4.jpg" alt="sharingBoxes" />
      </Container>
    </Layout>
  )
}
export default Work
