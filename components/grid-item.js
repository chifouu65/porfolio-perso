import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={href}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ id, title, thumbnail, type }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/projects/${id}`}
      scroll={false}
      cursor="pointer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        src={thumbnail}
        alt={title}
        height={120}
        width={300}
        loading="lazy"
      />
      <Badge mt={2} colorScheme={useColorModeValue('purple', 'orange')}>{type}</Badge>
      <LinkOverlay as="div" >
        <Text px={5} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
