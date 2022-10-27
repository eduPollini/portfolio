import { FaHome } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { BsCodeSlash, BsTelephoneFill } from 'react-icons/bs'

export const MenuData = [
    {
        title: 'Início',
        src: '/',
        cName: 'menu-item',
        icon: <FaHome/>
    },
    {
        title: 'Sobre Mim',
        src: '/aboutMe',
        cName: 'menu-item',
        icon: <FiUser/>
    },
    {
        title: 'Meus Projetos',
        src: '/myProjects',
        cName: 'menu-item',
        icon: <BsCodeSlash/>
    },
    {
        title: 'Contato',
        src: '/contact',
        cName: 'menu-item',
        icon: <BsTelephoneFill/>
    },
];