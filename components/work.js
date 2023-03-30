import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link target="_blank"
    color={useColorModeValue('purple.500', 'orange.200')}
    as={NextLink} href="/works">
      Works
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading sx={
      {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }
    } as="h3" fontSize={20} mt={1} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, sx }) => (
  <Image sx={sx} borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
