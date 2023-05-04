import {HiAcademicCap} from "react-icons/hi";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
    Center, Text, Heading, Divider, useColorModeValue, Badge, Highlight, Tooltip, List, ListItem, ListIcon
} from '@chakra-ui/react'
import {MdWork} from 'react-icons/md'
import {cutString} from "../lib/helpers";
import {works, skills, formations} from '../data/index'
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Link from "next/link";
import {GiFamilyTree} from "react-icons/gi";
import {AiFillLinkedin, AiOutlineMail} from "react-icons/ai";

const Acrd = ({title, content, icon}) => {
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}
                        >
                            {icon}
                            <Text fontSize="lg" fontWeight="medium">
                                {title}
                            </Text>
                            <AccordionIcon fontSize={25}/>
                        </Box>
                    </AccordionButton>
                </h2>
                <AccordionPanel px={{
                    base: '0',
                    md: '4'
                }} pb={0} pt={4}>
                    {
                        content
                    }
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

function Page() {
    return (
        <>
            <Box m={4} textAlign={'center'}>
                <Text fontSize="lg" fontWeight="medium"
                      sx={{display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center'}}
                >
                    Noah Lhote
                    <Badge variant='outline' colorScheme={useColorModeValue("purple", "orange")}>
                        Dev Fullstack
                    </Badge>
                </Text>
                <Text fontSize={{
                    base: 'sm',
                    md: 'normal'
                }} fontWeight="normal">
                    Je suis un développeur web fullstack passionné.
                    J'ai commencé à coder en 2019, sur des jeux vidéo avec le langage Java.
                    J'ai ensuite découvert le web, et j'ai commencé à apprendre les bases du dev-web avec le html/css/js
                    pour ensuite faire une formation et obtenir mon diplôme de développeur web.
                    Je suis actuellement toujours en formation pour devenir développeur web fullstack, je suis donc à la
                    recherche d'une entreprise pour un contrat d'apprentissage.
                </Text>
                <Center>
                    <List spacing={3} >
                        <ListItem mt={2} >
                            <Tooltip label={
                                "M'envoyer un mail"
                            } aria-label='A tooltip'>
                                <Link target={'_blank'} href={'mailto:noah.lhote56@gmail.com'}>
                                    <AiOutlineMail fontSize={25}/>
                                </Link>
                            </Tooltip>

                        </ListItem>
                        <ListItem>
                            <Tooltip label={
                                'https://www.linkedin.com/in/noah-lhote/'
                            } aria-label='A tooltip'>
                                <Link target={'_blank'} href={'https://www.linkedin.com/in/noah-lhote/'}>
                                    <AiFillLinkedin fontSize={25}/>
                                </Link>
                            </Tooltip>
                        </ListItem>
                    </List>
                </Center>
            </Box>
            <Center minHeight={'100vh'} alignItems={'flex-start'}>
                <Box width={{
                    base: '100%',
                    md: '540px',
                }}>
                    <Accordion allowMultiple={true}>
                        <Acrd
                            title='Formations et études'
                            content={
                                formations.map((formation, index) => (
                                    <>
                                        <Box pb={0} key={index}>
                                            <Heading
                                                fontSize={{
                                                    base: 'normal',
                                                    md: 'xl'
                                                }}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 2
                                                }} as="h3" variant="section-title">
                                                <Highlight
                                                    query={formation.title}
                                                    styles={{
                                                        px: '2',
                                                        py: '1',
                                                        rounded: 'full',
                                                        bg: useColorModeValue('purple.400', 'orange.200')
                                                    }}
                                                >
                                                    {(formation.title).toString()}
                                                </Highlight>
                                                {formation.link && (
                                                    <Tooltip label={
                                                        formation.link
                                                    } aria-label='A tooltip'>
                                                        <Link
                                                            href={formation.link}>
                                                            <ExternalLinkIcon mx="2px"/>
                                                        </Link>
                                                    </Tooltip>
                                                )}
                                            </Heading>

                                            <Text fontSize={{
                                                base: 'sm',
                                                md: 'normal'
                                            }} fontWeight={'normal'}>
                                                {cutString(formation.text)}
                                            </Text>
                                            <Badge
                                                variant='outline'
                                                colorScheme={useColorModeValue('purple', 'orange')}
                                            >
                                                {formation.certification} - {formation.year}
                                            </Badge>
                                        </Box>
                                        <Divider my={4} orientation='horizontal'/>
                                    </>
                                ))
                            }
                            icon={<HiAcademicCap fontSize={25}/>}
                        />

                        <Acrd
                            title='Exprériences professionnelles et personnels'
                            content={
                                <>
                                    <Text
                                        bg={useColorModeValue('gray.100', 'gray.900')}
                                        p={4} mb={4}>
                                        {
                                            cutString(`Je sors de ma formation développeur web chez OpenClassRooms, je n'ai donc pas d'expérience professionnelle dans le domaine autre que des missions freelance (fiver).\n Cependant, j'ai réalisé des projects personnels, et communautaire retrouvable sur mon github.`)
                                        }
                                    </Text>
                                    {
                                        works.map((work, index) => (

                                            <>
                                                <Box key={index}>
                                                    <Heading fontSize={{
                                                        base: 'normal',
                                                        md: 'xl'
                                                    }}
                                                             sx={{
                                                                 display: 'flex',
                                                                 alignItems: 'center',
                                                                 gap: 2
                                                             }} as="h3" variant="section-title">
                                                        <Highlight
                                                            query={work.title}
                                                            styles={{
                                                                px: '2',
                                                                py: '1',
                                                                rounded: 'full',
                                                                bg: useColorModeValue('purple.400', 'orange.200')
                                                            }}
                                                        >
                                                            {(work.title).toString()}
                                                        </Highlight>
                                                        {work.link && (
                                                            <Tooltip label={
                                                                `see more...`
                                                            } aria-label='A tooltip'>
                                                                <Link
                                                                    href={`/works/${work.id}`}>
                                                                    <ExternalLinkIcon mx="2px"/>
                                                                </Link>
                                                            </Tooltip>
                                                        )}
                                                    </Heading>

                                                    <Text fontSize={{
                                                        base: 'sm',
                                                        md: 'normal'
                                                    }} fontWeight="normal">
                                                        {cutString(work.description)}
                                                    </Text>
                                                    <Badge
                                                        variant='outline'
                                                        colorScheme={useColorModeValue('purple', 'orange')}
                                                    >
                                                        {work.type}
                                                    </Badge>
                                                </Box>
                                                <Divider my={2} orientation='horizontal'/>
                                            </>
                                        ))
                                    }
                                </>
                            }
                            icon={<MdWork fontSize={25}/>}
                        />
                        <Acrd
                            title='Compétences'
                            content={
                                skills.map((item, index) => (
                                    <Box pb={4} key={index}>
                                        <Heading variant="section-title" mb={4}>
                                            {item.title}
                                        </Heading>
                                        <List spacing={3}>
                                            {
                                                item.lang && item.lang.map((lang, index) => (
                                                    <ListItem key={index}>
                                                        <ListIcon as={lang.icon}
                                                                  color={useColorModeValue('purple.500', 'orange.200')}/>
                                                        {lang.title}
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Box>
                                ))
                            }
                            icon={<GiFamilyTree fontSize={25}/>}
                        />
                    </Accordion>
                </Box>
            </Center>
        </>
    )
}

export default Page