import React, { useState } from 'react'

import './styles.css'

export default function Imagem ( { miniImg, zoomImg, alt } ) {
    const [view, setView] = useState(false)

    function _handleView( ) {
        return view ? { 
            display : 'flex', 
            overflow : 'hidden !important',
            transition: "all 0.5s"
        } : { 
            display : 'none',
        }
    }

    return (
        <>
            <div 
                className="mini-imagem" 
                onClick={ () => setView( true ) }
            >
                <img src={ miniImg } alt={ alt } />
            </div>
            
            <div 
                className="zoom-img" 
                style={ _handleView() }
            >
                <div 
                    className="button-close" 
                    onClick={ () => setView( false ) } 
                >
                    <p>Fechar</p> X
                </div>

                <img src={ zoomImg } alt={ alt } />
            </div>
        </>
    )
}