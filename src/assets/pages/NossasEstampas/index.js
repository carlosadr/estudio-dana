import React from 'react'

import './styles.css'

// Imagens em miniatura
import miniImg1 from '../../images/estampas/mini-img1.webp'
import miniImg2 from '../../images/estampas/mini-img2.webp'
import miniImg5 from '../../images/estampas/mini-img5.webp'
import miniImg6 from '../../images/estampas/mini-img6.webp'
import miniImg7 from '../../images/estampas/mini-img7.webp'
import miniImg8 from '../../images/estampas/mini-img8.webp'
import miniImg10 from '../../images/estampas/mini-img10.webp'

// Imagens maiores
import img1 from '../../images/estampas/img1.webp'
import img2 from '../../images/estampas/img2.webp'
import img5 from '../../images/estampas/img5.webp'
import img6 from '../../images/estampas/img6.webp'
import img7 from '../../images/estampas/img7.webp'
import img8 from '../../images/estampas/img8.webp'
import img10 from '../../images/estampas/img10.webp'

import estampasExclusivas from '../../svg/estampas-exclusivas.svg'
import nossasEstampas from '../../svg/nossas-estampas.svg'
import macaw from '../../images/macaw.webp'
import flower from '../../images/flower.webp'
import Imagem from '../../components/Imagem'

export default function NossasEstampas() {
    return (
        <>
            <section id='nossas-estampas' className='container'>
                <div className="container-banner">
                    <div className="text-banner">
                        <img className='flower' src={flower} alt="" />
                        <img src={estampasExclusivas} alt="" />
                        
                        <p>
                            Somos especializados em transformar suas ideias em criações unicas, dentro das mais recentes tendências do mercado!
                        </p>
                    </div>
                </div>
                <div className="container-estampas max-container">
                    <div className="title">
                        <h2 style={{
                                color: 'transparent',
                                maxHeight: '0px'
                            }}
                        >
                            Nossas estampas
                        </h2>

                        <img src={nossasEstampas} alt="" />
                        <img id='macaw' src={macaw} alt="" />
                        
                    </div>
                    <div className="images">
                        <Imagem
                            miniImg={miniImg1}
                            zoomImg={img1}
                            alt='Estampa geometrica com hexagonos em tecidos.'
                        />
                        <Imagem
                            miniImg={miniImg2}
                            zoomImg={img2}
                            alt='Estampa dente geometrica dente de leão.'
                        />
                        <Imagem
                            miniImg={miniImg5}
                            zoomImg={img5}
                            alt='Estampa geometrica com hexagonos em tecidos.'
                        />
                        <Imagem
                            miniImg={miniImg6}
                            zoomImg={img6}
                            alt='Estampa dente geometrica dente de leão.'
                        />
                        <Imagem
                            miniImg={miniImg7}
                            zoomImg={img7}
                            alt='Estampa abstrata com elementos desenhados em giz de cera.'
                        />
                        <Imagem
                            miniImg={miniImg8}
                            zoomImg={img8}
                            alt={'Estampa feita com a maioria dos elementos desenhados a mão.'}
                        />
                        <Imagem
                            miniImg={miniImg10}
                            zoomImg={img10}
                            alt='Estampa infantil com casinhas coloridas e divertidas.'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}