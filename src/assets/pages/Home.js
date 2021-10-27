import React from 'react';

import background from '../images/background.webp'

import Nav from '../components/Nav';
import Logo from '../components/Logo';
import QuemSomos from '../components/QuemSomos';
import NossasEstampas from '../components/NossasEstampas';
import FaleConosco from '../components/FaleConosco';

export default function Home() {
    return (
        <>
            <Nav />

            <Logo />

            <main id='home'
                className='container'
            >
                <h1 style={{ color: 'transparent' }}>
                    Estúdio Dana - O seu estúdio que transforma suas ideias em lindas e exclusivas estampas.
                </h1>
                <img className="background" src={background} alt="Estampas com elementos exclusivos." />
            </main>

            <QuemSomos />

            <NossasEstampas />

            <FaleConosco />
        </>
    );
}
