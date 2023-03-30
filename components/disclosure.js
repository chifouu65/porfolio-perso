import { useDisclosure } from '@chakra-ui/react'
import { Button, Text, useColorModeValue } from '@chakra-ui/react'

function Disclosure({
    text,
    title,
    year,
    certification,
}) {
    const { getDisclosureProps, getButtonProps } = useDisclosure()
  
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
    return (
      <>
        <Button 
         variant="outline"
         colorScheme={useColorModeValue('purple', 'orange')}
        {...buttonProps}>
            {title}
        </Button>
        <Text sx={{
          textIndent: '0px',
        }} 
        {...disclosureProps} mt={4}>
          <Text as="span" fontWeight="bold">{year} - </Text>
          {text}
          <br/>
          <Text as="span" fontWeight="bold">({certification}.)</Text>
        </Text>
      </>
    )
}


export default Disclosure