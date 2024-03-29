import {useRouter} from 'next/router'
import {works} from '../../data/index'
import {useEffect, useState} from 'react'
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
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import Layout from '../../components/layouts/article'
import SliderComponent from "../../components/slider";
import YouTube from "react-youtube";

const Projects = () => {
    const router = useRouter()
    const {slug} = router.query
    const [work, setWork] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const opts = {
        maxWidth: '640',
        width: '100%',
        
    };
    function _onReady(event) {
        event.target.pauseVideo();
    }
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
        return <div>
            <Layout title="Work not found">
                <Container>
                    <Title>
                        Work not found
                    </Title>
                    The work you are looking for does not exist.
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
        </div>
    } else {
        return (
            <>
                <Layout title={work.title} description={work.description}
                        keywords={work.stack}
                >
                    <Container maxW={'2xl'}>
                        <Title>
                            {work.title && work.title}{' - '} ({work.type})
                        </Title>
                        {
                            work.year &&
                            <Badge mb={2} bg={useColorModeValue('purple.500', 'orange.200')}
                                   color={useColorModeValue('white', 'gray.900')}>
                                {work.year}
                            </Badge>
                        }
                        {
                            work.description.split('\n').map((text, index) => {
                                return <Text as={'p'} mt={2} key={index}>{text}</Text>
                            })

                        }
                        <List ml={4} my={4}>
                            {
                                work.link && <ListItem>
                                    <Meta>
                                        {work.link.includes('github') ? 'Github' : 'Website'}
                                    </Meta>
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
                                <Meta>Type</Meta>
                                <span>{work.type}</span>
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
                        { work.video && 
                            <div className="">
                                <YouTube videoId="oxhSJZu-jFI" 
                                opts={opts} onReady={_onReady} />
                            </div>
                        } 
                        { 
                            work.imgs && work.video && <Divider my={4}/>
                        }
                        { work.imgs && <SliderComponent cards={work.imgs} />}
                    </Container>
                </Layout>
            </>
        )
    }
}

export default Projects
export {getServerSideProps} from '../../components/chakra'
  