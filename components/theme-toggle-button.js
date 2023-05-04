

import {Button, useColorMode, useColorModeValue} from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        /**
         * Ideally, only the button component should be used (without Flex).
         * Props compatible with <Button /> are supported.
         */
        <>
            <Button
                aria-label="Toggle Color Mode"
                colorScheme={useColorModeValue('purple', 'orange')}
                onClick={toggleColorMode}
                w="fit-content"
                {...props}>
                {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
        </>
    );
}