import React from 'react';

import './styles.css'

import quemSomos from '../../svg/quem-somos.svg'
import imgQuemSomos from '../../images/quem-somos.webp'
import toucan from '../../images/toucan.webp'

export default function QuemSomos() {
    return (
        <>
            <section id='quem-somos' className='container quem-somos max-container'>
                <div className='imagem'>
                    <img src={imgQuemSomos} alt="" />
                </div>
                <div className="container-text">
                    <img src={ quemSomos } alt="Quem Somos" className="col-12" />
                    
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

                    <img className='toucan' src={toucan} alt="Ilustração digital de um tucano" />
                </div>
            </section>
        </>
    )
}