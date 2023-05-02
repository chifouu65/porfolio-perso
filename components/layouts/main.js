import Head from 'next/head'
import NavBar from '../navbar'
import {Box, Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Je suis Noah Dev-FullStack retrouvez des projects & posts"/>
                <meta name="author" content="Noah Lhote"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
                <meta property="og:site_name" content="Noah Lhote | Portfolio"/>
                <title>Noah Lhote - Developpeur FullStack</title>
            </Head>

            <NavBar path={router.asPath}/>
            <Container maxW="container.md" pt={20}>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}

export default Main
