import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import './MyProjects.css'
import { MyProjectsData } from './MyProjectsData';

function MyProjects() {
    window.scrollTo(0, 0);
    
  return (
    <div className='pages my-projects'>
        <div className='pages-text header-my-projects'>
            <h2 className='pages-title'>Meus Projetos</h2>
            <p>Conheça alguns dos meus projetos.</p>
        </div>
        <div className="center">
            <Carousel indicatorLabels={false} className=''>
                {MyProjectsData.map((item, index) => {
                    return(
                        <Carousel.Item className={item.cName} key={index}>
                            {item.img}
                            <Carousel.Caption>
                                <h2>{item.title}</h2>
                                
                                <div className='carousel-btns'>
                                    <a className='visit' target='_black' href={item.hrefSite}>Visitar</a>
                                    <a className='visit' target='_black' href={item.hrefGithub}>GitHub</a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    </div>
  )
}

export default MyProjects