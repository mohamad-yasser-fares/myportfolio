import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        {''}
        <Box
          h="fit-content"
          borderRadius="lg"
          bg={useColorModeValue('#B0B3B8', 'whiteAlpha.200')}
          p={1}
          mb={5}
          align="center"
        >
          <p>
            {' '}
            A software developer and gamer based in Germany &#9749;&#128526;
          </p>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h4" variant="page-title">
              Mohamad Yasser Fares
            </Heading>
            <p> ( Developer / Thinker / Gamer ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderRadius="lg"
              boxSize="200px"
              src="/images/me3.png"
              alt="Profile image"
            ></Image>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>

          <Paragraph>
            I&apos;m a software developer interested in software developing and
            tech topics, I recently graduated with a bachelor&apos;s degree in
            computer science from TU Clausthal, and looking for new challenges.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>1997</BioYear>
            Born in Damascus, Syria.
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            Started to work as Werkstudent at the institue for software and
            systems engineering (ISSE) at TU Clausthal
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            B.Sc graduate in Computer Science from TU Clausthal
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
