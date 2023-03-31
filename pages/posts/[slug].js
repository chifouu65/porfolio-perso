import { useRouter } from 'next/router'
import { posts } from '../../data/index'
import { useEffect, useState } from 'react'
import {
    Container,
    ListItem,
    useColorModeValue,
    Button,
    Divider,
    Text,
    List
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Head from 'next/head'

const Posts = () => {
    const router = useRouter()
    const { slug } = router.query
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
        return  <div>
            <Head>
                <title>Post not found - Noah Lhote</title>
                <meta name="og:title" content={`Post not found - Noah Lhote`} />
                <meta name="og:description" content="Post not found" />
            </Head>
            <Layout title="Post not found">
                <Container>
                    <Title>
                        Post not found
                    </Title>
                        The post you are looking for does not exist.
                </Container>
                <Divider my={4} />
                <Container>
                    <Button
                        colorScheme={useColorModeValue('purple', 'orange')}
                        onClick={() => router.back()}
                    >
                        Go back
                    </Button>
                </Container>
            </Layout>
        </div>
    } else {
        return (
        <>
        <Head>
            <title>{post.title} - Posts - Noah Lhote</title>
            <meta name="og:title" content={`${post.title} - Posts - Noah Lhote`} />
            <meta name="og:description" content={post.description} />
            <meta name="keywords" content={
                post.tags.map((stack) => {
                    return stack
                }) + ', ' + post.title
            }/>
        </Head>
        <Layout title={post.title}
        >
        <Container>
            
            <Title>
                {
                    post.title && post.title + ' ' 
                }
            </Title>
                {
                    post.description.map((desc, index) => {
                        return ( 
                            
                                desc.includes('$$') ?
                                <Text key={index} as="h2"
                                    mb={2}
                                    fontWeight="bold"
                                    fontSize="xl"
                                    pl={2}
                                    bg={useColorModeValue('purple.100', 'orange.100')}
                                    color={useColorModeValue('purple.500', 'orange.500')}
                                >
                                    {
                                        desc.replace('$$', '')
                                    }
                                </Text> :
                                <Text key={index} mb={2} as="p" fontSize="xl">
                                    {
                                        desc
                                    }
                                </Text>
                        )
                    })
                }
            <List ml={4} my={4}>
            <ListItem>
                <Meta>Platform</Meta>
                <span>Website</span>
            </ListItem>
            {
                post.tags && 
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        {
                            post.tags.map((stack, index) => {
                                return <span key={index}>
                                    {
                                        index === post.tags.length - 1 ? stack : stack + ', '
                                    }
                                </span>
                            })
                        }
                    </span>
                </ListItem>
            }
            </List>
            {
                post.images && 
                post.images.map((img, index) => {
                        return <WorkImage key={index} src={img.src.src}/>
                    })
            }
        </Container>
        </Layout>
        </>
        )
    }
  }
  
  export default Posts
  export { getServerSideProps } from '../../components/chakra'
  