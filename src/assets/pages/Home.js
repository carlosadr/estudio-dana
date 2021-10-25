import React, { useState } from 'react';
import { Link } from "react-scroll";

import logo from '../svg/logo.svg'
import quemSomos from '../svg/quem-somos.svg'
import estampasExclusivas from '../svg/estampas-exclusivas.svg'

import background from '../images/background.png'
import imgQuemSomos from '../images/quem-somos.png'
import toucan from '../images/toucan.png'

export default function Home() {
    // const [ scrollTop, setScrollTop ] = useState(0)
    const [ position, setPosition ] = useState('absolute')
    const [ top, setTop ] = useState('35%')
    const [ width, setWidth ] = useState('340px')

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
                        <p>
                        Somos especializados em transformar suas ideias em criações unicas, dentro das mais recentes tendências do mercado!
                        </p>
                    </div>
                </div>
                <div className="container-estampas">
                    <div className="title">

                    </div>
                    <div className="images">

                    </div>
                </div>
            </div>

            <div id='fale-conosco' className='container'>
                <div>
                    FALE CONOSCO
                </div>
            </div>
        </>
    );
}
