import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import './Menu.css'

import { MenuData } from './MenuData'

import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

function Menu() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    const closeMenuHandler = () => setClick(false);

  return (
    <div className='menu'>
        <Link to='/' className='name'><h1>Eduardo Pollini</h1></Link>
        <nav className='nav'>
            <ul className='menu-nav'>
                {MenuData.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.src}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        <div className='menu-mobile'>
            <a className='icon-menu-mobile'>{click ? <MdClose onClick={handleClick}/> : <BiMenu onClick={handleClick}/>}</a>
            <nav className={click ? 'nav-mobile' : 'nav-mobile hide'}>
                <ul className='menu-nav-mobile'>
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.src} onClick={closeMenuHandler}>{item.icon}{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Menu