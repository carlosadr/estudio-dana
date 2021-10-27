import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './styles.css'

export default function Nav() {
    const [color, setColor] = useState('transparent')

    window.onscroll = () => {
        if ( window.screen.width < 600 ) {
            document.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 150) {
                    setColor('#fffdf0d8')

                } else {
                    setColor('transparent')
                }
            })
        } else {
            setColor('#fffdf0d8')
        }

    }

    return (
        <>
            <header id='menu'
                className="nav"
                style={{
                    backgroundColor: color,
                    zIndex: 3,
                    transition: 'background-color 0.5s'
                }}
            >
                <nav className='max-container' >
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
                        to="nossas-estampas"
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
                </nav>
            </header>
        </>
    )
}