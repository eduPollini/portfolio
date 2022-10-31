import projectLayout from '../../../images/projectLayout.png'
import crieSeuLayoutImg from '../../../images/crieSeuLayout.png'

export const MyProjectsData = [
    {
        title: 'Crie Seu Layout SRP',
        img: <img src={projectLayout} alt='projeto layout SRP img' className='d-block w-100'></img>,
        text: <span>
                <p>Crie seu Layout é uma aplicação web projetada para a empresa Sítio Refúgio dos Pássaros, localizada na cidade de Casa Branca - SP, proprietária de um salão de eventos.</p>
                <p>A aplicação contém a planta baixa do local onde o usuário posicionará os itens decorativos, tais como mesas de convidados e mesas de buffet.</p>
            </span>,
        cName: 'carousel-item',
        hrefSite: 'https://crieseulayoutsrp.netlify.app',
        hrefGithub: 'https://github.com/eduPollini/Crie-seu-Mapeamento-SRP'
    },
    {
        title: 'Crie Seu Layout',
        img: <img src={crieSeuLayoutImg} alt='projeto layout img' className='d-block w-100'></img>,
        text: <span>
                <p>Crie seu Layout é uma aplicação web projetada para a empresa Sítio Refúgio dos Pássaros, localizada na cidade de Casa Branca - SP, proprietária de um salão de eventos.</p>
                <p>A aplicação contém a planta baixa do local onde o usuário posicionará os itens decorativos, tais como mesas de convidados e mesas de buffet.</p>
            </span>,
        cName: 'carousel-item',
        hrefSite: 'https://crieseulayout.netlify.app',
        hrefGithub: 'https://github.com/eduPollini/crie-seu-layout-react'
    }
]