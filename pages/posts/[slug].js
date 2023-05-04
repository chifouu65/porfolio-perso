import {useRouter} from 'next/router'
import {posts} from '../../data/index'
import {useEffect, useState} from 'react'
import {
    Container,
    useColorModeValue,
    Button,
    Divider,
    Box,
    Heading,
    Text,
    Wrap,
    WrapItem,
    VStack,
    Link,
    HStack,
    Tag
} from '@chakra-ui/react'
import {Title} from '../../components/work'
import Layout from '../../components/layouts/article'
import Image from 'next/image'
import { isTitle } from '../../lib/helpers'

const Posts = () => {
    const router = useRouter()
    const {slug} = router.query
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (slug) {
            const postFind = posts.find(post => post.id === slug)
            if (postFind) {
                setPost(postFind)
                setLoading(false)
            } else {
                setError('Post not found')
                setLoading(false)
            }
        }
    }, [slug])

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <>
            <Layout title="Post not found">
                <Container>
                    <Title>
                        Post not found
                    </Title>
                    The post you are looking for does not exist.
                </Container>
                <Divider my={4}/>
                <Container>
                    <Button
                        colorScheme={useColorModeValue('purple', 'orange')}
                        onClick={() => router.back()}
                    >
                        Go back
                    </Button>
                </Container>
            </Layout>
        </>
    } else {
        return (
            <>
                <Layout title={post.title} description={post.description} keywords={post.tags}>
                <Container maxW={'7xl'} p="12">
                    <Wrap spacing="30px">
                        <WrapItem w="100%">
                        <Box w="100%">
                            <Box borderRadius="lg" overflow="hidden">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                transform="scale(1.0)"
                                src={
                                    post.images[0].src
                                }
                                alt="some text"
                                objectFit="contain"
                                width="100%"
                                transition="0.3s ease-in-out"
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                                />
                            </Link>
                            </Box>
                            {
                                post.tags.map((tag, index) => {
                                    return (
                                        <Tag key={index} size="lg" borderRadius="full" variant="solid" colorScheme={useColorModeValue('purple', 'orange')} marginTop="10px" marginRight="10px">
                                            {tag}
                                        </Tag>
                                    )
                                })
                            }
                            <Heading pt={4} fontSize="xl" marginTop="2">
                            <Link color={useColorModeValue('purple.400', 'orange.200')} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                {post.title}
                            </Link>
                            </Heading>
                        </Box>
                        </WrapItem>
                    </Wrap>
                    {/* desc */} 
                    <VStack pt={4} spacing="2" alignItems="flex-start">
                        {
                            post.description.map((desc, index) => {
                                return (
                                    isTitle(desc)
                                )
                            }
                        )}
                    </VStack>
                </Container>
                </Layout>
            </>
        )
    }
}

export {getServerSideProps} from '../../components/chakra'
export default Posts
  