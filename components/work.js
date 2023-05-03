import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue, Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export const Title = ({ children }) => {
  const currentPath = useRouter().pathname
  return (
    (
      <Box>
        <Link
        color={useColorModeValue('purple.500', 'orange.200')}
        as={NextLink} href={
          currentPath.split('[')[0]
        }>
          {
            currentPath.split('[')[0]
          }
        </Link>
        <span>
          {' '}
          <ChevronRightIcon />
        </span>
        <Divider my={2} />
        <Heading sx={
          {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }
        } as="h2" fontSize={26} mt={1} mb={4}>
          {children}
        </Heading>
      </Box>
    )
  )
}

export const WorkImage = ({ src, alt, style}) => (
  <Image
      style={style}
      borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
