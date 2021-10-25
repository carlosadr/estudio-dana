import React, { useState } from 'react';
import { Link } from "react-scroll";

import logo from '../svg/logo.svg'
import quemSomos from '../svg/quem-somos.svg'
import estampasExclusivas from '../svg/estampas-exclusivas.svg'
import nossasEstampas from '../svg/nossas-estampas.svg'
import faleConosco from '../svg/fale-conosco.svg'

import instagram from '../svg/instagram.svg'
// import facebook from '../svg/facebook.svg'
import pinterest from '../svg/pinterest.svg'

import background from '../images/background.png'
import imgQuemSomos from '../images/quem-somos.png'
import toucan from '../images/toucan.png'
import flower from '../images/flower.png'
import macaw from '../images/macaw.png'

export default function Home() {
    const [ position, setPosition ] = useState('absolute')
    const [ top, setTop ] = useState('35%')
    const [ width, setWidth ] = useState('340px')

    const [ channel, setChannel ] = useState(0)
    const [ name, setName ] = useState("")
    const [ message, setMessage ] = useState("")

    window.onscroll = () => {
        document.addEventListener('scroll', () => {
            if( document.documentElement.scrollTop > 325 ) {
                setPosition( 'fixed' )
                setTop( '2.2%' )
                setWidth( '220px' )
            } else {
                setPosition( 'absolute' )
                setTop('35%')
                setWidth( '340px' )
            }
        })
    }

    function _handlePosition() {
        return {
            position : position,
            top : top,
            width : width,
            transition : 'width 0.6s'
        }
    }

    return (
        <>
            <div id='menu' 
                className="nav"
            >
                <div className='max-container' >
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>

                    <Link 
                        to="quem-somos"
                        smooth={true}
                        duration={500}
                    >
                        Quem somos
                    </Link>

                    <Link 
                        to="estampas"
                        smooth={true}
                        duration={500}
                    >
                        Nossas Estampas
                    </Link>

                    <Link 
                        to="fale-conosco"
                        smooth={true}
                        duration={500}
                    >
                        Contato
                    </Link>
                </div>
            </div>

            <div id='logo' 
                className='logo'
                style={ _handlePosition() }
            >
                <img src={logo} alt="" />
            </div>
            
            <div id='home' 
                className='container'
            >
                <img className="background" src={background} alt="" />
            </div>

            <div id='quem-somos' className='container quem-somos max-container'>
                <div className='imagem'>
                    <img src={ imgQuemSomos } alt="" />
                </div>
                <div className="container-text">
                    <img src={ quemSomos } alt="" />
                    <div className="text">
                        <p>
                            Olá, somos do Estúdio Dana, me chamo Carla, sou maquiadora profissional há 4 anos e trabalho em conjunto com meu esposo Carlos que já atua no mercado de estamparia e ilustração digitais há 8 anos.
                        </p>
                        <p>
                            Há 1 ano, com o nascimento do nosso filho e com a maternidade me descobri apaixonada por criação de estampas.
                        </p>
                        <p>
                            Assim, surgiu a necessidade de montar nosso próprio negócio, e então nasceu Dana. Nosso foco é em estampas exclusivas, com a maioria dos elementos desenhados à mão, personalizados a gosto do cliente para que você possa sentir carinho e atenção através de cada estampa.
                        </p>
                    </div>
                    <img className='toucan' src={ toucan } alt="" />
                </div>
            </div>

            <div id='estampas' className='container nossas-estampas'>
                <div className="container-banner">
                    <div className="text-banner">
                        <img src={ estampasExclusivas } alt="" />
                        <img className='flower' src={ flower } alt="" />
                        <p>
                        Somos especializados em transformar suas ideias em criações unicas, dentro das mais recentes tendências do mercado!
                        </p>
                    </div>
                </div>
                <div className="container-estampas max-container">
                    <div className="title">
                        <img src={ nossasEstampas } alt="" />
                        <img id='macaw' src={ macaw } alt="" />
                    </div>
                    <div className="images">
                        Imagens
                    </div>
                </div>
            </div>

            <div id='fale-conosco' className='container fale-conosco'>
                <form id='form'>
                    <img src={ faleConosco } alt="" />

                    <label> Canal </label>
                    <select 
                        defaultValue={0}
                        onChange={ e => setChannel(parseInt(e.target.value)) }
                    >
                        <option value={0} disabled>Selecione o canal</option>
                        <option value={1} >Whatsapp</option>
                        <option value={2} >E-mail</option>
                    </select>

                    <label> Seu nome </label>
                    <input 
                        placeholder="ex.: Thomas Magno" 
                        value={ name } 
                        onChange={ e => setName(e.target.value) } 
                    />

                    <label> Mensagem </label>
                    <textarea 
                        value={ message } 
                        onChange={ e => setMessage(e.target.value) } 
                        placeholder="Deixe sua mensagem aqui, que iremos responder com todo carinho ;)" 
                    />

                    <button 
                        id="button"
                        type="button"
                        onClick={ () => {
                            switch (channel) {
                                case 1:
                                    window.open(
                                        `whatsapp://send?phone=17623096714&text=Olá me chamo${ name }, ${message}`, 
                                        '_blank'
                                    )
                                    break;
                                case 2:
                                    window.open(
                                        `mailto:estudiodana.cs@gmail.com? Subject: Mais informações sobre as estampas exclusivas&body=Olá me chamo${ name }, ${ message }`,
                                        '_blank'
                                    )
                                    break;
                                default:
                                    alert( "Selecione primeiro por qual canal deseja nós enviar sua mensagem." )
                                    break;
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
                                <img src={ instagram } alt="Instaram" /> 
                            </a>
                            {/* <a 
                                target='_blank'
                                rel="noreferrer"
                                href="https://facebook.com/estudio_dana"
                            > 
                                <img src={ facebook } alt="Facebook" />  
                            </a> */}
                            <a 
                                target='_blank'
                                rel="noreferrer"
                                href="https://pinterest.com/estudio_dana"
                            > 
                                <img src={ pinterest } alt="Pinterest" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
