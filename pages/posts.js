import {
     Heading, SimpleGrid,
    Box,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {posts} from '../data'
import Image from 'next/image'

const Posts = () => {

    return (
        <Layout title="Posts">
                <Heading as="h3" fontSize={20} mb={4}>
                    Posts
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1]} gap={6}>
                    {
                            posts.map((post, index) => (
                                <Link
                                key={index}
                                color={useColorModeValue('gray.700', 'gray.200')}
                                _hover={{ textDecoration: 'none' }}
                                href={`/posts/${post.id}`}
                                marginTop={{ base: '1', sm: '5' }}
                                display="flex"
                                flexDirection={{ base: 'column', sm: 'row' }}
                                justifyContent="space-between">
                                <Box
                                  display="flex"
                                  flex="1"
                                  marginRight="3"
                                  position="relative"
                                  alignItems="center">
                                  <Box
                                    width={{ base: '100%', sm: '85%' }}
                                    zIndex="2"
                                    marginLeft={{ base: '0', sm: '5%' }}
                                    marginTop="5%">
                                      <Image
                                        borderRadius="lg"
                                        src={
                                         post.images[0].src
                                        }
                                        alt="some good alt text"
                                      />
                                  </Box>
                                  <Box zIndex="1" width="100%" position="absolute" height="100%">
                                    <Box
                                      bgGradient={useColorModeValue(
                                        'radial(purple.400 1px, transparent 1px)',
                                        'radial(orange.200 1px, transparent 1px)'
                                      )}
                                      backgroundSize="20px 20px"
                                      opacity="0.4"
                                      height="100%"
                                    />
                                  </Box>
                                </Box>
                                <Box
                                  display="flex"
                                  flex="1"
                                  flexDirection="column"
                                  justifyContent="center"
                                  marginTop={{ base: '3', sm: '0' }}>
                                  <Heading marginTop="1">
                                    <Link textDecoration="none"
                                    color={useColorModeValue('purple.400', 'orange.200')}
                                    _hover={{ textDecoration: 'none' }}>
                                      {post.title}
                                    </Link>
                                  </Heading>
                                </Box>
                              </Link>
                            ))
                        }
                    </SimpleGrid>
                </Section>
        </Layout>
    )
}
export default Posts
export {getServerSideProps} from '../components/chakra'
