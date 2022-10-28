import { FaGamepad, FaGitAlt, FaGithubSquare, FaGraduationCap, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript } from "react-icons/si";
import { MdCardTravel, MdPets } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";

import iconBrasil from '../../../images/icon-brazil.png'
import iconUSA from '../../../images/icon-usa.png'

export const AboutMeData = [
    {
        title: 'Escolaridade',
        cName: 'about-me-box',
        items:
        [
            {
                icon: <FaGraduationCap/>,
                description: 'Cursando Bacharelado Engenharia de Computação - UNIARA',
                cName: 'box-item block'
            }
        ]
    },
    {
        title: 'Idiomas',
        cName: 'about-me-box',
        items: 
        [
            {
                img: <img src={iconBrasil}></img>,
                description: 'Português Nativo',
                cName: 'box-item'
            },
            {
                img: <img src={iconUSA}></img>,
                description: 'Inglês Intermediário',
                cName: 'box-item'
            }
        ]
    },
    {
        title: 'Conhecimentos',
        cName: 'about-me-box',
        items: 
        [
            {
                icon: <AiFillHtml5/>,
                description: 'HTML 5',
                cName: 'box-item'
            },
            {
                icon: <SiCss3/>,
                description: 'CSS 3',
                cName: 'box-item'
            },
            {
                icon: <SiJavascript/>,
                description: 'JavaScript',
                cName: 'box-item'
            },
            {
                icon: <FaReact/>,
                description: 'React',
                cName: 'box-item'
            },
            {
                icon: <FaGitAlt/>,
                description: 'Git',
                cName: 'box-item'
            },
            {
                icon: <FaGithubSquare/>,
                description: 'GitHub',
                cName: 'box-item'
            },
        ]
    },
    {
        title: 'Hobbies & Interesses',
        cName: 'about-me-box',
        items: 
        [
            {
                icon: <MdPets/>,
                description: 'Pets',
                cName: 'box-item'
            },
            {
                icon: <BiDumbbell/>,
                description: 'Academia',
                cName: 'box-item'
            },
            {
                icon: <FaGamepad/>,
                description: 'Jogos',
                cName: 'box-item'
            },
            {
                icon: <MdCardTravel/>,
                description: 'Viagem',
                cName: 'box-item'
            }
        ]
    },
]