import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import {works} from '../data/index'
import Paragraph from '../components/paragraph'

const keywords = [
    'Noah Lhote',
    works.map(work => work.title).join(','),
    'Dev web',
    'Développeur web',
    'Dev Reactjs',
    'Développeur Reactjs',
    'Dev Nodejs',
    'Développeur Nodejs',
    'Dev Nextjs',
    'Développeur Nextjs',
    'Dev Fullstack',
    'Développeur Fullstack',
    'Dev Frontend',
    'Développeur Frontend',
]

const Works = () => (
    <Layout
        keywords={keywords}
        title="Projects & Réalisations" description={"Mes projets et réalisations, plus sur github."}>
        <Container maxW={'2xl'}>
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
export {getServerSideProps} from '../components/chakra'
