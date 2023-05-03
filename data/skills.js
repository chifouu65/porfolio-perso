import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import {FaNodeJs, FaReact} from 'react-icons/fa';
import {SiExpress, SiJavascript, SiRedux} from 'react-icons/si';
import {BiGitBranch} from 'react-icons/bi';

const skills = [
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
                id: 3,
                title: 'JavaScript',
                icon: SiJavascript
            },
            {
                id: 4,
                title: 'ReactJS',
                icon: FaReact
            },
            {
                id: 5,
                title: 'Redux',
                icon: SiRedux
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
            }
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
            }
        ]
    },
]

export default skills;