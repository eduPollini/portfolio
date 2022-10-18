import { useEffect, useState } from 'react';
import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function abrirMenuMobile(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'block';
    }else{
        menuMobile.style.display = 'none';
    }
}

function Header(){
    return(
        <div className='header'>
            <div className="center">
                <div className="header-logo">
                    <a href="#"><h2>Eduardo Pollini</h2></a>
                </div>
                <div className="header-menu">
                    <a href="#"><span>Início</span></a>
                    <a href="#sobre-mim"><span>Sobre mim</span></a>
                    <a href="#meus-projetos"><span>Meus projetos</span></a>
                    <a href="#contato"><span>Contato</span></a>
                </div>
                <div class="header-menu-mobile">
                    <span><FontAwesomeIcon onClick={()=>abrirMenuMobile()} icon="fa-solid fa-bars"/></span>
                    <div class="menu-mobile">
                        <a href="#">Início</a>
                        <a href="#sobre-mim">Sobre mim</a>
                        <a href="#meus-projetos">Meus projetos</a>
                        <a href="#contato">Contato</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;