import React from 'react'
import './Home.css'

import fotoEduardo from '../../../images/banner-foto.png'

export default function Home(){
    return(
        <div className='pages home pages-text'>
			<div className='center '>
				<div className='foto-wrapper'>
					<img src={fotoEduardo}></img>
				</div>
				<div className='text-wrapper'>
					<h1>Eduardo Pollini</h1>
					<h3>Full Stack Developer - Jr.</h3>
				</div>
			</div>
        </div>
    )
}