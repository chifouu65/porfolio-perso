import {Box, useDisclosure} from '@chakra-ui/react'
import {Button, Text, useColorModeValue} from '@chakra-ui/react'
import {cutString} from "../lib/helpers";
import {useState} from "react";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

function Disclosure({
                        text,
                        title,
                        year,
                        certification,
                    }) {
    const {getDisclosureProps, getButtonProps} = useDisclosure()
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
                {
                    cutString(text)
                }
                <br/>
                <Text as="span" fontWeight="bold">({certification}.)</Text>
            </Text>
        </>
    )
}

function Disclosrr({title, subTitle, text, subText, icon}) {
    const {getDisclosureProps, getButtonProps} = useDisclosure()

    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
    return (
        <>
            <Box py={2}
                width={{
                    base: '100%',
                }}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Button
                    borderRadius={4}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textIndent: '0px',
                    }}
                    fontSize={18}
                    variant="solid"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    {...buttonProps}
                >
                    <span>
                        {icon}
                    </span>
                    <span>
                        {title}
                    </span>
                    <span>
                        {
                            disclosureProps.isOpen ? <IoIosArrowUp fontSize={25}/> : <IoIosArrowDown fontSize={25}/>
                        }
                    </span>
                </Button>
                <Text
                    borderRadius={4}
                    height={'100%'}
                    color={useColorModeValue('gray.700', 'gray.700')}
                    bg={useColorModeValue('purple.100', 'orange.100')}
                    mx={4}
                    p={4}
                    sx={{
                        zIndex: '-2',
                        position: 'relative',
                        textIndent: '0px',
                        top: '-20px',
                    }}
                    {...disclosureProps} mt={4}
                >
                    <Text as="span" fontWeight="bold">{subTitle}</Text>
                    { cutString(text) }
                    <Text as="span" fontWeight="bold">{subText}</Text>
                </Text>
            </Box>
        </>
    )
}

export {Disclosrr}
export default Disclosure