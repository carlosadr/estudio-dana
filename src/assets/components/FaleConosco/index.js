import React, { useState } from 'react'

import './styles.css'

import faleConosco from '../../svg/fale-conosco.svg'

import instagram from '../../svg/instagram.svg'
import facebook from '../../svg/facebook.svg'
import shutterstock from '../../svg/shutterstock.svg'
import pinterest from '../../svg/pinterest.svg'

export default function FaleConosco () {
    const [channel, setChannel] = useState(0)
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    return (
        <>
            <section id='fale-conosco' className='container fale-conosco'>
                <form id='form'>
                    <img src={faleConosco} alt="" />

                    <label> Canal </label>
                    <select
                        style={ channel === 0 ? { color: "#F8C9AA"} : { color : "#EA4B37" } }
                        defaultValue={0}
                        onChange={e => setChannel(parseInt(e.target.value))}
                    >
                        <option value={0} disabled>Selecione o canal</option>
                        <option value={1} >Whatsapp</option>
                        <option value={2} >E-mail</option>
                    </select>

                    <label> Seu nome </label>
                    <input
                        required
                        placeholder="ex.: Thomas Magno"
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <label> Mensagem </label>
                    <textarea
                        value={message}
                        type='text'
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Deixe sua mensagem aqui, que iremos responder com todo carinho ;)"
                    />

                    <button
                        id="button"
                        type="button"
                        onClick={() => {
                            if ( !name ) {
                                alert("Insira seu nome.")
                            } else {
                                switch (channel) {
                                    case 1:
                                        window.open(
                                            `whatsapp://send?phone=17623096714&text=Olá me chamo ${name}, ${message}`,
                                            '_blank'
                                        )
                                        break;
                                    case 2:
                                        window.open(
                                            `mailto:estudiodana.cs@gmail.com? Subject: Mais informações sobre as estampas exclusivas&body=Olá me chamo ${name}, ${message}`,
                                            '_blank'
                                        )
                                        break;
                                    default:
                                        alert("Selecione primeiro por qual canal deseja nós enviar sua mensagem.")
                                        break;
                                }
                            }
                        }}
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
                                <img src={instagram} alt="Instagram - Estúdio Dana" />
                            </a>
                            <a 
                                target='_blank'
                                rel="noreferrer"
                                href="https://web.facebook.com/Est%C3%BAdio-Dana-103640772123505/"
                            > 
                                <img src={ facebook } alt="Facebook - Estúdio Dana" />  
                            </a>
                            <a 
                                target='_blank'
                                rel="noreferrer"
                                href="https://www.shutterstock.com/pt/g/candrereboucas"
                            > 
                                <img src={ shutterstock } alt="Shutterstock - Estúdio Dana" />  
                            </a>
                            <a
                                target='_blank'
                                rel="noreferrer"
                                href="https://pinterest.com/estudio_dana"
                            >
                                <img src={pinterest} alt="Pinterest - Estúdio Dana" />
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}