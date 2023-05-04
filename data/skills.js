import {AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {FaNodeJs, FaReact, FaJava} from 'react-icons/fa';
import {
    SiAdobephotoshop,
    SiAdobexd,
    SiChakraui, SiDocker,
    SiExpress, SiGithubactions,
    SiJavascript,
    SiMongodb, SiNginx,
    SiPostgresql, SiPrisma,
    SiSass,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';
import {BiGitBranch} from 'react-icons/bi';
import {TbBrandNextjs, TbCloudComputing} from 'react-icons/tb';
import {GrMysql, GrVirtualStorage} from 'react-icons/gr';
import {FiFigma} from "react-icons/fi";

const skills = [
    {
        id: 0,
        title: 'Languages',
        lang: [
            {
                id: 1,
                title: 'JavaScript',
                icon: SiJavascript
            },
            {
                id: 3,
                title: 'TypeScript',
                icon: SiTypescript
            },
            {
                id: 4,
                title: 'Java',
                icon: FaJava

            }
        ]
    },
    {
        id: 1,
        title: 'Front-end',
        lang: [
            {
                id: 1,
                title: 'HTML',
                icon: AiFillHtml5
            },
            {
                id: 2,
                title: 'CSS',
                icon: DiCss3
            },
            {
                id: 4,
                title: 'ReactJS',
                icon: FaReact
            },
            {
                id: 6,
                title: 'NextJS',
                icon: TbBrandNextjs
            },
            {
                id: 6,
                title: 'TailwindCSS',
                icon: SiTailwindcss
            },
            {
                id: 7,
                title: 'ChakraUI',
                icon: SiChakraui
            },
            {
                id: 8,
                title: 'Sass',
                icon: SiSass
            }
        ]
    },
    {
        id: 2,
        title: 'Back-end',
        lang: [
            {
                id: 1,
                title: 'NodeJS',
                icon: FaNodeJs
            },
            {
                id: 2,
                title: 'ExpressJS',
                icon: SiExpress
            },
            {
                id: 3,
                title: 'MongoDB',
                icon: SiMongodb
            },
            {
                id: 4,
                title: 'PostgreSQL',
                icon: SiPostgresql
            },
            {
                id: 5,
                title: 'MySQL',
                icon: GrMysql
            },
            {
                id: 6,
                title: 'Prisma ORM',
                icon: SiPrisma
            },
            {
                id: 7,
                title: 'Nginx',
                icon: SiNginx
            },
            {
                id: 8,
                title: 'Docker',
                icon: SiDocker
            },
        ]
    },
    {
        id: 3,
        title: 'Others',
        lang: [
            {
                id: 1,
                title: 'Git',
                icon: BiGitBranch
            },
            {
                id: 2,
                title: 'GitHub',
                icon: AiFillGithub
            },
            {
                id: 3,
                title: 'GitHub Actions',
                icon: SiGithubactions
            },
            {
                id: 3,
                title: 'Vps',
                icon: TbCloudComputing
            },
        ]
    },
    {
        id: 4,
        title: 'Design',
        lang: [
            {
                id: 1,
                title: 'Figma',
                icon: FiFigma
            },
            {
                id: 2,
                title: 'Adobe XD',
                icon: SiAdobexd
            },
            {
                id: 3,
                title: 'Adobe Photoshop',
                icon: SiAdobephotoshop
            }
        ]
    }
]

export default skills;