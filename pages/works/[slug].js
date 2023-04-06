import { useRouter } from 'next/router'
import { works } from '../../data/index'
import { useEffect, useState } from 'react'
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    Button,
    Divider,
    Text,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Head from 'next/head'

const Work = () => {
    const router = useRouter()
    const { slug } = router.query
    const [work, setWork] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       if (slug) {
            const workFind = works.find(work => work.id === slug)
            if (workFind) {
                setWork(workFind)
                setLoading(false)
            } else {
                setError('Work not found')
                setLoading(false)
            }
       }
    }, [slug])

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return  <div>
            <Head>
                <title>Work not found - Works - Noah Lhote</title>
                <meta name="og:title" content={`Work not found - Works - Noah Lhote`} />
                <meta name="og:description" content="Work not found" />
            </Head>
            <Layout title="Work not found">
                <Container>
                    <Title>
                        Work not found
                    </Title>
                        The work you are looking for does not exist.
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
            <title>{work.title} - Works - Noah Lhote</title>
            <meta name="og:title" content={`${work.title} - Works - Noah Lhote`} />
            <meta name="og:description" content={work.description} />
            <meta name="keywords" content={
                work.stack.map((stack) => {
                    return stack
                }) + ', ' + work.title
            }/>
        </Head>
        <Layout title={work.title}
        >
        <Container>
            <Title>
                {
                    work.title && work.title + ' ' 
                }{' - '}
                {
                    work.year && <Badge
                    bg={
                        useColorModeValue('purple.500', 'orange.200')
                    }
                    color={
                        useColorModeValue('white', 'gray.900')
                    }
                    >{work.year}</Badge>
                }
            </Title>
                {
                    work.description.split('\n').map((text, index) => {
                        return <Text as={'p'} mt={2} key={index}>{text}</Text>
                    })
                    
                }
            <List ml={4} my={4}>
            {
                work.link && <ListItem>
                    <Meta>Website</Meta>
                    <Link
                        target="_blank"
                        color={useColorModeValue('purple.500', 'orange.200')}
                        href={
                            work.link
                        }>
                        {
                            (work.link).replace('https://', '').replace('http://', '').replace('www.', '').length > 15 ?
                            (work.link).replace('https://', '').replace('http://', '').replace('www.', '').substring(0, 35) + '...' :
                            (work.link).replace('https://', '').replace('http://', '').replace('www.', '')
                        } <ExternalLinkIcon mx="2px" 
                        />
                    </Link>
                </ListItem>
            }
            <ListItem>
                <Meta>Platform</Meta>
                <span>Website</span>
            </ListItem>
            {
                work.stack && 
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        {
                            work.stack.map((stack, index) => {
                                return <span key={index}>
                                    {
                                        index === work.stack.length - 1 ? stack : stack + ', '
                                    }
                                </span>
                            })
                        }
                    </span>
                </ListItem>
            }
            </List>
            {
                work.imgs && 
                    work.imgs.map((img, index) => {
                        return <WorkImage key={index} src={img.src}/>
                    })
            }
        </Container>
        </Layout>
        </>
        )
    }
  }
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  