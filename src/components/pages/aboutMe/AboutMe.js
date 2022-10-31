import React from 'react'
import './AboutMe.css'
import { AboutMeData } from './AboutMeData'

export default function AboutMe() {
    window.scrollTo(0, 0);

    return(
        <div className='pages about-me'>
            
            <div className='pages-text header-about-me'>
                <h2 className='pages-title'>Sobre Mim</h2>
                <p>Aooba! Eu sou o Eduardo Pollini. <br/><br/>
                Estou iniciando minha carreira como programador Full Stack .</p>
            </div>
            <div className='center'>

                {AboutMeData.map((box, index) => {
                    return(
                        <div className={box.cName} key={index}>
                            <h2>{box.title}</h2>
                            {box.items.map((item, index) => {
                                return(
                                    <div className={item.cName} key={index}>
                                        {item.icon}{item.img}{item.description}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}