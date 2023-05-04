import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';
import Profile from "./profile";

export default function Card({image, title, subTitle, children, tags}) {
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                >
                <Profile image={image}/>
                <Heading textAlign={'center'} fontSize={'2xl'} fontFamily={'body'}>
                    {title}
                </Heading>
                <Text fontWeight={600} textAlign={'center'} color={'gray.500'} mb={4}>
                    {subTitle}
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {children}
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    {
                        tags.map((tag, index) => (
                            <Badge key={index}
                                px={2}
                                py={1}
                                bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #{tag}
                            </Badge>
                        ))
                    }
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        as={Link}
                        href={'mailto:noah.lhote56@gmail.com'}
                        target={'_blank'}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        variant={'outline'}
                        colorScheme={useColorModeValue('purple', 'orange')}
                        >
                        Message
                    </Button>
                    <Button
                        as={Link}
                        target={'_blank'}
                        href={'https://www.linkedin.com/in/noah-lhote/'}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        colorScheme={useColorModeValue('purple', 'orange')}
                    >
                        LinkedIn
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}