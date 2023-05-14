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

const Projects = () => (
    <Layout
        keywords={keywords}
        title="Projects & Réalisations" description={"Mes projets et réalisations, plus sur github."}>
        <Container maxW={'2xl'}>
            <Heading as="h3" fontSize={20} mb={6}>
                Projects & Réalisations
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={4}>
                {
                    works.map((work, index) => (
                        <Section key={index}>
                            <WorkGridItem id={work.id} type={work.type} title={work.title} thumbnail={work.thumbnail}/>
                        </Section>
                    ))
                }
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
export {getServerSideProps} from '../components/chakra'
