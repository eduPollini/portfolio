import './Body.css';
import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import fotoEduardo from './images/banner-foto.png';
import iconBrazil from './images/icon-brazil.png';
import iconUsa from './images/icon-usa.png';
import projetoLayout from './images/projeto-layout.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faReact, faLinkedin, faSquareGithub, faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faComputer, faDatabase, faFutbolBall, faPlane, faTelevision } from '@fortawesome/free-solid-svg-icons';


function Body(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function enviarFormContato(e){
        e.preventDefault();

        if(nome === '' || email === '' || mensagem === ''){
            alert('Preencha todos os campos')
            return;
        }

        const templateParms = {
            from_name: nome,
            email: email,
            message: mensagem
        }

        emailjs.send('service_6rbtha5', 'template_sruwuim', templateParms, 'R4Ney1IgfdkZZwWaL')
        .then((response)=>{
            console.log('Email Enviado', response.status, response.text)
            setNome('');
            setEmail('');
            setMensagem('');
        }, (error) => {
            console.log('ERRO: ', error)
        })
    }

    return(
        <div className='body'>

            <section className="banner">
                <div className="conteudo-banner">
                    <div className="wrapper">
                        <img alt='fotoEduardo' src={fotoEduardo}/>
                    </div>
                    <h1>Eduardo Pollini</h1>
                    <h2>Desenvolvedor Full Stack Jr.</h2>
                </div>
            </section>

            <section id='sobre-mim' className='sobre-mim'>
                <div className="center">
                    <h1>Sobre mim</h1>
                    <p>Estou a poucos passos da minha graduação no curso de Engenharia de Computação, portanto estou em
busca de experiências que atreladas ao meu estudo construam uma
fundação firme para meu crescimento profissional.</p>
                    <div className="conteudo-sobre-mim">
                        <div className="item-conteudo-sobre-mim">
                            <h2>Escolaridade</h2>
                            <i><FontAwesomeIcon icon="fa-solid fa-graduation-cap" /></i>
                            <p>Cursando Bacharelado Engenharia de Computação - UNIARA</p>
                        </div>
                        <div className="item-conteudo-sobre-mim idiomas">
                            <h2>Idiomas</h2>
                            <div className="idioma">
                                <img alt='iconBrasil' src={iconBrazil}/>
                                <span>Português Nativo</span>
                            </div>
                            <div className="idioma">
                                <img alt='iconUSA' src={iconUsa}/>
                                <span>Inglês Intermediário</span>
                            </div>
                        </div>
                        <div className="item-conteudo-sobre-mim">
                            <h2>Conhecimentos</h2>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faHtml5} /></i>
                                <span>HTML 5</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faCss3} /></i>
                                <span>CSS 3</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faJsSquare} /></i>
                                <span>Javascript</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faReact} /></i>
                                <span>React.js</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faDatabase} /></i>
                                <span>Firebase</span>
                            </div>
                        </div>
                        <div className="item-conteudo-sobre-mim">
                            <h2>Hobbies & Interesses</h2>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faComputer} /></i>
                                <span>Jogos</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faFutbolBall} /></i>
                                <span>Esporte</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faPlane} /></i>
                                <span>Viagem</span>
                            </div>
                            <div className="conhecimento">
                                <i><FontAwesomeIcon icon={faTelevision} /></i>
                                <span>Séries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='meus-projetos' className="meus-projetos">
                <div className="center">
                    <h1>Meus Projetos</h1>
                    <div className="slider-wrapper">
                        
                        <Carousel className='carousel' indicatorLabels={false}>
                            
                            <Carousel.Item>
                                <h2>Layout de Eventos</h2>
                                <div className="slider-single-content">
                                    <img alt='projetoLayout' src={projetoLayout}/>
                                    <span>
                                        <p>Layout de Eventos é uma aplicação web projetada para a empresa Sítio Refúgio dos Pássaros, localizada na cidade de Casa Branca - SP, proprietária de um salão de eventos.</p>
                                        <br />
                                        <p>A aplicação contém a planta baixa do local onde o usuário posicionará os itens decorativos, tais como mesas de convidados e mesas de buffet.</p>
                                    </span>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>Layout de Eventos</h2>
                                <div className="slider-single-content">
                                    <img alt='projetoLayout' src={projetoLayout}/>
                                    <span>
                                        <p>Layout de Eventos é uma aplicação web projetada para a empresa Sítio Refúgio dos Pássaros, localizada na cidade de Casa Branca - SP, proprietária de um salão de eventos.</p>
                                        <br />
                                        <p>A aplicação contém a planta baixa do local onde o usuário posicionará os itens decorativos, tais como mesas de convidados e mesas de buffet.</p>
                                    </span>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>Layout de Eventos</h2>
                                <div className="slider-single-content">
                                    <img alt='projetoLayout' src={projetoLayout}/>
                                    <span>
                                        <p>Layout de Eventos é uma aplicação web projetada para a empresa Sítio Refúgio dos Pássaros, localizada na cidade de Casa Branca - SP, proprietária de um salão de eventos.</p>
                                        <br />
                                        <p>A aplicação contém a planta baixa do local onde o usuário posicionará os itens decorativos, tais como mesas de convidados e mesas de buffet.</p>
                                    </span>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    
                </div>
            </section>

            <section id='contato' className="contato">
                <div className="center">
                    <h1>Contato</h1>
                    <form className='form-contato'>
                        <input 
                            type="text" 
                            className='form-nome' 
                            placeholder='Seu nome...'
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <input 
                            type="email" 
                            className='form-email' 
                            placeholder='Seu e-mail...'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <textarea 
                            className="form-mensagem" 
                            placeholder='Sua mensagem...'
                            onChange={(e) => setMensagem(e.target.value)}
                            value={mensagem}>
                        </textarea>
                        <input type="button" onClick={(e)=>enviarFormContato(e)} value='Enviar'/>
                    </form>
                </div>
            </section>

            <footer>
                <div className="center">
                    <div className="redes-sociais">
                        <span>Redes Sociais</span>
                        <a href='https://www.linkedin.com/in/eduardo-pollini' target='_black'><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href='https://www.github.com/eduPollini' target='_black'><FontAwesomeIcon icon={faSquareGithub} /></a>
                        <a href='https://www.instagram.com/edupollini/' target='_black'><FontAwesomeIcon icon={faSquareInstagram} /></a>
                        <a href='https://www.facebook.com/eduardo.pollini' target='_black'><FontAwesomeIcon icon={faSquareFacebook} /></a>
                    </div>
                    <div className="footer-logo">
                        <span>Eduardo Pollini</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Body;