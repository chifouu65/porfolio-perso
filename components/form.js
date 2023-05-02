import {FormControl, FormLabel, FormHelperText, Input, Button, useColorModeValue} from '@chakra-ui/react'
import NextLink from "next/link";
import {EmailIcon} from "@chakra-ui/icons";
import React from "react";
const Form = ({ children, ...props }) => {
    return (
    <FormControl netlify >
            <FormLabel>
                <FormHelperText>Adresse email</FormHelperText>
                <Input type='email' />
            </FormLabel>
            <FormLabel>
                <FormHelperText>Message</FormHelperText>
                <Input type='text' />
            </FormLabel>

            <Button
                mt={4}
                type={'submit'}
                scroll={false}
                rightIcon={<EmailIcon />}
                colorScheme={useColorModeValue('purple', 'orange')}
            >
                Me contacter
            </Button>
        </FormControl>
    )
}

export default Form