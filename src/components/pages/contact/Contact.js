import React from 'react'
import Form from '../../form/Form'
import './Contact.css'

function Contact() {
    
    window.scrollTo(0, 0);
    
  return (
    <div className='pages contact'>
                <div className='pages-text header-contact'>
                    <h2 className='pages-title'>Contato</h2>
                    <p>Gostou do meu trabalho? <br/><br/>
                    Gostaria de trabalhar comigo ou saber mais sobre mim?<br/>
                    Entre em contato.</p>
                </div>
            <div className='center'>
                <Form/>
            </div>
        </div>
  )
}

export default Contact