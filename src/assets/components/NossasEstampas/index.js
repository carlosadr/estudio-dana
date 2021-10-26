import React from 'react'

import './styles.css'

// Imagens em miniatura
import miniImg1 from '../../images/estampas/mini-img1.png'
import miniImg2 from '../../images/estampas/mini-img2.png'
import miniImg3 from '../../images/estampas/mini-img3.png'
import miniImg4 from '../../images/estampas/mini-img4.png'
// import miniImg5 from '../../images/estampas/mini-img5.png'
// import miniImg6 from '../../images/estampas/mini-img6.png'
// import miniImg7 from '../../images/estampas/mini-img7.png'
// import miniImg8 from '../../images/estampas/mini-img8.png'
// import miniImg9 from '../../images/estampas/mini-img9.png'
// import miniImg10 from '../../images/estampas/mini-img10.png'
// import miniImg11 from '../../images/estampas/mini-img11.png'
// import miniImg12 from '../../images/estampas/mini-img12.png'

// Imagens maiores
import img1 from '../../images/estampas/img1.jpg'
import img2 from '../../images/estampas/img2.jpg'
import img3 from '../../images/estampas/img3.jpg'
import img4 from '../../images/estampas/img4.jpg'
// import img5 from '../../images/estampas/img5.png'
// import img6 from '../../images/estampas/img6.png'
// import img7 from '../../images/estampas/img7.png'
// import img8 from '../../images/estampas/img8.png'
// import img9 from '../../images/estampas/img9.png'
// import img10 from '../../images/estampas/img10.png'
// import img11 from '../../images/estampas/img111png'
// import img12 from '../../images/estampas/img1.12ng'

import estampasExclusivas from '../../svg/estampas-exclusivas.svg'
import nossasEstampas from '../../svg/nossas-estampas.svg'
import macaw from '../../images/macaw.webp'
import flower from '../../images/flower.webp'
import Imagem from '../Imagem'

export default function NossasEstampas () {
    return (
        <>
            <div id='nossas-estampas' className='container'>
                <div className="container-banner">
                    <div className="text-banner">
                        <img src={estampasExclusivas} alt="" />
                        <img className='flower' src={flower} alt="" />
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

                        </div>
                        <div className="rows">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}