import {Button, useColorModeValue} from '@chakra-ui/react'
import {EmailIcon} from "@chakra-ui/icons";
import React from "react";
const Form = ({ children, ...props }) => {
    return (
            <Button
                mt={4}
                type={'submit'}
                scroll={false}
                rightIcon={<EmailIcon />}
                colorScheme={useColorModeValue('purple', 'orange')}
            >
                Me contacter
            </Button>
    )
}

export default Form