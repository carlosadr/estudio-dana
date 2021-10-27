import React from 'react'

import './styles.css'

// Imagens em miniatura
import miniImg1 from '../../images/estampas/mini-img1.webp'
import miniImg2 from '../../images/estampas/mini-img2.webp'
import miniImg3 from '../../images/estampas/mini-img3.webp'
import miniImg4 from '../../images/estampas/mini-img4.webp'
import miniImg5 from '../../images/estampas/mini-img5.webp'
import miniImg6 from '../../images/estampas/mini-img6.webp'
import miniImg7 from '../../images/estampas/mini-img7.webp'
import miniImg8 from '../../images/estampas/mini-img8.webp'
import miniImg9 from '../../images/estampas/mini-img9.webp'
import miniImg10 from '../../images/estampas/mini-img10.webp'
import miniImg11 from '../../images/estampas/mini-img11.webp'
import miniImg12 from '../../images/estampas/mini-img12.webp'

// Imagens maiores
import img1 from '../../images/estampas/img1.webp'
import img2 from '../../images/estampas/img2.webp'
import img3 from '../../images/estampas/img3.webp'
import img4 from '../../images/estampas/img4.webp'
import img5 from '../../images/estampas/img5.webp'
import img6 from '../../images/estampas/img6.webp'
import img7 from '../../images/estampas/img7.webp'
import img8 from '../../images/estampas/img8.webp'
import img9 from '../../images/estampas/img9.webp'
import img10 from '../../images/estampas/img10.webp'
import img11 from '../../images/estampas/img11.webp'
import img12 from '../../images/estampas/img12.webp'

import estampasExclusivas from '../../svg/estampas-exclusivas.svg'
import nossasEstampas from '../../svg/nossas-estampas.svg'
import macaw from '../../images/macaw.webp'
import flower from '../../images/flower.webp'
import Imagem from '../Imagem'

export default function NossasEstampas () {
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
                        <img src={nossasEstampas} alt="" />
                        <img id='macaw' src={macaw} alt="" />
                    </div>
                    <div className="images">
                        <div className="rows">
                            <Imagem 
                                miniImg={ miniImg1 }
                                zoomImg={ img1 }
                            />
                            <Imagem 
                                miniImg={ miniImg2 }
                                zoomImg={ img2 }
                            />
                            <Imagem 
                                miniImg={ miniImg3 }
                                zoomImg={ img3 }
                            />
                            <Imagem 
                                miniImg={ miniImg4 }
                                zoomImg={ img4 }
                                alt={ 'Estampa feita com a maioria dos elementos desenhados a mão.' }
                            />
                        </div>

                        <div className="rows">
                            <Imagem 
                                miniImg={ miniImg5 }
                                zoomImg={ img5 }
                            />
                            <Imagem 
                                miniImg={ miniImg6 }
                                zoomImg={ img6 }
                            />
                            <Imagem 
                                miniImg={ miniImg7 }
                                zoomImg={ img7 }
                            />
                            <Imagem 
                                miniImg={ miniImg8 }
                                zoomImg={ img8 }
                                alt={ 'Estampa feita com a maioria dos elementos desenhados a mão.' }
                            />
                        </div>
                        
                        <div className="rows">
                            <Imagem 
                                miniImg={ miniImg9 }
                                zoomImg={ img9 }
                            />
                            <Imagem 
                                miniImg={ miniImg10 }
                                zoomImg={ img10 }
                            />
                            <Imagem 
                                miniImg={ miniImg11 }
                                zoomImg={ img11 }
                            />
                            <Imagem 
                                miniImg={ miniImg12 }
                                zoomImg={ img12 }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}