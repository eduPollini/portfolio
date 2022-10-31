import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import './Form.css'

function Form() {

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
            console.log('E-mail Enviado - ', response.text.at, response.status);
            alert('E-mail Enviado!');
            setNome('');
            setEmail('');
            setMensagem('');
            document.querySelector('.form-nome').innerHTML = nome;
            document.querySelector('.form-email').innerHTML = email;
            document.querySelector('.form-mensagem').innerHTML = mensagem;
        }, (error) => {
            console.log('ERRO: ', error)
        })
    }

  return (
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
  )
}

export default Form