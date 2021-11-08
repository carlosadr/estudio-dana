import React, { useState } from 'react'

import './styles.css'

import faleConosco from '../../svg/fale-conosco.svg'

import instagram from '../../svg/instagram.svg'
import facebook from '../../svg/facebook.svg'
import shutterstock from '../../svg/shutterstock.svg'
import pinterest from '../../svg/pinterest.svg'
import twitter from '../../svg/twitter.svg'

export default function FaleConosco () {
    const [channel, setChannel] = useState(0)
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    function _handleDisabledButton() {
        return channel === 0 || !name ? { cursor : 'no-drop'} : { cursor : 'pointer' } 
    }

    function _handleSubmit () {
        switch (channel) {
            case 1:
                window.open(
                    `whatsapp://send?phone=17623096714&text=Olá me chamo ${name}${!message ? ', ' : '' } ${message}`,
                    '_blank'
                )
                break;
            case 2:
                window.open(
                    `mailto:estudiodana.cs@gmail.com? Subject: Mais informações sobre as estampas exclusivas&body=Olá me chamo ${name}${!message ? ', ' : '' } ${message}`,
                    '_blank'
                )
                break;
            
            default: break;
        }
    }

    return (
        <>
            <section id='fale-conosco' className='container fale-conosco'>
                <form id='form'>
                    <img src={faleConosco} alt="" />

                    <label> Canal <strong>*</strong> </label>
                    <select
                        style={ channel === 0 ? { color: "#F8C9AA"} : { color : "#EA4B37" } }
                        defaultValue={0}
                        onChange={e => setChannel(parseInt(e.target.value))}
                    >
                        <option value={0} disabled>Selecione o canal</option>
                        <option value={1} >Whatsapp</option>
                        <option value={2} >E-mail</option>
                    </select>

                    <label> Seu nome <strong>*</strong> </label>
                    <input
                        required
                        placeholder="ex.: Thomas Magno"
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <label> Mensagem <strong id='opcional'>( opcional )</strong> </label>
                    <textarea
                        value={message}
                        type='text'
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Deixe sua mensagem aqui, que iremos responder com todo carinho ;)"
                    />

                    <button
                        id="button"
                        type="button"
                        disabled={ channel === 0 || !name ? true : false }
                        style={ _handleDisabledButton() }
                        onClick={ () => _handleSubmit() }
                    >
                        Enviar
                    </button>
                </form>

                <footer className='container-block'>
                    <div className="max-container">
                        <p>Copyright © 2021 Estúdio Dana, Todos os direitos reservados.</p>
                        <div id='social-media'>
                            <a
                                target='_blank'
                                rel="noreferrer"
                                href="https://instagram.com/estudio_dana"
                            >
                                <img src={instagram} alt="Instagram - Estúdio Dana | Estampas exclusivas" />
                            </a>
                            <a 
                                target='_blank'
                                rel="noreferrer"
                                href="https://web.facebook.com/Est%C3%BAdio-Dana-103640772123505/"
                            > 
                                <img src={ facebook } alt="Facebook - Estúdio Dana | Estampas exclusivas" />  
                            </a>
                            <a 
                                target='_blank'
                                rel="noreferrer"
                                href="https://www.shutterstock.com/g/candrereboucas?rid=294618133&utm_medium=email&utm_source=ctrbreferral-link"
                            > 
                                <img src={ shutterstock } alt="Shutterstock - Estúdio Dana | Estampas exclusivas" />  
                            </a>
                            <a
                                target='_blank'
                                rel="noreferrer"
                                href="https://pinterest.com/estudio_dana"
                            >
                                <img src={pinterest} alt="Pinterest - Estúdio Dana | Estampas exclusivas" />
                            </a>
                            <a
                                target='_blank'
                                rel="noreferrer"
                                href="https://twitter.com/estudio_dana"
                            >
                                <img src={twitter} alt="Twitter - Estúdio Dana" />
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}