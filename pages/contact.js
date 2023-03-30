import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const Contact = () => {
  return (
    <Container>
      <Heading as="h1">Contact</Heading>
        <Text>My contact information.</Text>
        <Divider my={6} />
        <Container>
            <Heading as="h2">Email</Heading>
            <Text>My email address is <a href="mailto:noah.lhote56@gmail.com">
            noah.lhote56@gmail.com
            </a></Text>
        </Container>
        <Box my={6} align="center">
            <Button as={NextLink} href="/" target="_blank" colorScheme={useColorModeValue('purple', 'orange')}>
                Return to home
            </Button>
        </Box>

    </Container>
  )
}

export default Contact
