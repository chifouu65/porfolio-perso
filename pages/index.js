import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra,
    Text,
    Divider, Tooltip
} from '@chakra-ui/react'
import {ChevronRightIcon, EmailIcon, ExternalLinkIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {BsGithub} from 'react-icons/bs'
import Image from 'next/image'
import Disclosure from '../components/disclosure'
import {cutString} from "../lib/helpers";
import {
    works,
    formations,
    links
} from '../data/index'
import {Meta} from '../components/work'
import Form from "../components/form";

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Profile = () => {
    return (
        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Noah Lhote
                </Heading>
                Dev Fullstack
            </Box>
            <Box
                flexShrink={0}
                mt={{base: 4, md: 0}}
                ml={{md: 6}}
                textAlign="center"
            >
                <Box
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                >
                    <ProfileImage
                        src="/images/devonpc.png"
                        alt="Profile image"
                        borderRadius="full"
                        width="100"
                        height="100"
                    />
                </Box>
            </Box>
        </Box>
    )
}
const About = () => {
    return (
        <Section delay={0.1}>
            <Heading pb={2} as="h3" variant="section-title">
                À propos de moi
            </Heading>
            <Box>
                Je suis
                actuellement en
                recherche d'une entreprise
                pour une alternance en
                tant que Développeur
                pour un niveau Bac+3
                {' '}
                <Link target="_blank" as={NextLink} href="/works/inkdrop" sx={{
                    fontWeight: 'bold',
                }} color={useColorModeValue('purple.500', 'orange.200')} passHref scroll={false}>
                    Ynov Campus
                </Link>
                {' '}
                à Rennes.
            </Box>
            <Box align="center" my={4}>
                <Button
                    as={NextLink}
                    href="/works"
                    scroll={false}
                    rightIcon={<ChevronRightIcon/>}
                    colorScheme={useColorModeValue('purple', 'orange')}
                >
                    Mon portfolio
                </Button>
            </Box>
        </Section>
    )
}
const Works = () => {
    return (
        <Section delay={0.2}>
            <Heading pb={2} as="h3" variant="section-title">
                Works & Projects
            </Heading>
            {
                works.map((item, index) => (
                    <>
                        <Divider my={2}/>
                        <BioSection key={index} pb={1}>
                            <BioYear>
                                {item.year} {' - '}
                                <Tooltip label={
                                    item.link
                                } aria-label='A tooltip'>
                                    <Link sx={{fontWeight: 'bold',}}
                                          color={useColorModeValue('purple.500', 'orange.200')}
                                          as={NextLink} href={item.link} passHref scroll={false}>
                                        {item.title} :
                                    </Link>
                                </Tooltip>
                            </BioYear>
                            <br/>
                            {' '}
                        </BioSection>
                        <List pl={8} ml={4} my={2}>
                            {cutString(item.description)} <span style={{fontWeight: 800}}>
                            ({item.type})
                        </span>
                        </List>
                        <List pl={8} ml={4} my={2}>
                            {
                                item.stack &&
                                <ListItem>
                                    <Meta>Stack</Meta>
                                    <span>
                        {
                            item.stack.map((stack, index) => {
                                return <span key={index}>
                                    {
                                        index === item.stack.length - 1 ? stack : stack + ', '
                                    }
                                </span>
                            })
                        }
                    </span>
                                </ListItem>
                            }
                        </List>
                    </>
                ))
            }
            <Box mt={4}>
                <NextLink href="/works" passHref scroll={false}>
                    <Button
                        rightIcon={<BsGithub/>}
                        variant="outline"
                        colorScheme={useColorModeValue('purple', 'orange')}
                    >
                        Voir plus ...
                    </Button>
                </NextLink>
            </Box>
        </Section>
    )
}

const Links = () => {
    return (
        <Section delay={0.3}>
            <Heading pb={2} as="h3" variant="section-title">
                Mes réseaux sociaux
            </Heading>
            <List>
                <ListItem pb={4}>
                    {
                        links.map((item, index) => (
                            <Link ml={4} key={index}
                                  sx={{
                                      fontWeight: 'bold',
                                  }}
                                  color={useColorModeValue('purple.500', 'orange.200')}
                                  href={item.link} target="_blank">
                                <Button
                                    colorScheme={useColorModeValue('purple', 'orange')}
                                    variant="outline"
                                    leftIcon={item.icon}
                                >
                                    @{item.title}
                                </Button>
                            </Link>
                        ))
                    }
                </ListItem>
            </List>
        </Section>
    )
}


const Home = () => (
    <Layout>
        <Container>
            <Profile/>
            <About/>
            <Works/>
            <Links/>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
