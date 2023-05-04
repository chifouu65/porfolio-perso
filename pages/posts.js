import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import {posts} from '../data'

const Posts = () => {

    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Posts
                </Heading>

                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        {
                            posts.map(post => (
                                <GridItem
                                    key={post.id}
                                    title={post.title}
                                    thumbnail={post.images[0].src}
                                    href={`/posts/${post.id}`}
                                />
                            ))
                        }

                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}
export default Posts
export {getServerSideProps} from '../components/chakra'
