import React from 'react';
import { Link } from 'react-scroll';

import './styles.css'

export default function Nav() {
    return (
        <>
            <header id='menu'
                className="nav"
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
                        Fale conosco
                    </Link>
                </nav>
            </header>
        </>
    )
}