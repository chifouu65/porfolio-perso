import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import {works} from '../data/index'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {
          works.map((work, index) => (
            <Section key={index}>
              <WorkGridItem id={work.id} title={work.title} thumbnail={work.thumbnail}>
                {
                  work.description.length > 50 ? (
                    <span>{work.description.slice(0, 50)}...</span>
                  ) : (
                    <span>{work.description}</span>
                  )
                }
              </WorkGridItem>
            </Section>
          ))
        }
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
