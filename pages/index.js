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
    Divider, Tooltip, Center
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
import Card from "../components/card";
const Home = () => (
    <Layout>
        <Center minHeight={"90vh"}>
            <Card
                title="NOAH LHOTE"
                subTitle={cutString("DÉVELOPPEUR FULLSTACK")}
                image="/images/devonpc.png"
                tags={[
                    'Alternance',
                    'Frontend',
                    'Backend',
                ]}
            >
                Je suis actuellement en recherche d'une entreprise pour une alternance en tant que Développeur pour 12 mois à partir de septembre
            </Card>
        </Center>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
