import React from 'react';

import background from '../../images/background.webp'

import Nav from '../../components/Nav';
import QuemSomos from '../QuemSomos';
import NossasEstampas from '../NossasEstampas';
import FaleConosco from '../FaleConosco';

export default function Home() {
    return (
        <>
            <Nav />

            <main id='home'
                className='container'
            >
                
                <h2 style={{
                        color: 'transparent',
                        maxHeight: '0px'
                    }}
                >
                    Estúdio Dana | Estampas exclusivas e muito mais, você só encontra aqui.
                </h2>
                
                <img className="background" src={background} alt="Estampas com elementos exclusivos." />
            </main>

            <QuemSomos />

            <NossasEstampas />

            <FaleConosco />
        </>
    );
}
