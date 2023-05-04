import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    light: {
        primary: '#AEE2FF',
        secondary: '#93C6E7',
        text: '#525252'
    },
    dark: {
        primary: '#2D3748',
        secondary: '#4A5568',
        text: '#E2E8F0'
    }
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme
