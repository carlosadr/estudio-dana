import React, { useEffect, useState } from 'react';
import './styles.css'

import logo from '../../svg/logo.svg'

export default function Logo () {
    const screenWidth = window.screen.width < 600
    const percentHeight = window.screen.height * 0.287
    const center = window.screen.height * 0.6

    const [ scrollTop, setScrollTop ] = useState(0)
    const [ position, setPosition ] = useState('absolute')
    const [ width, setWidth ] = useState( screenWidth < 600 ? '300px' : '340px' )
    const [ top, setTop ] = useState( ( center - scrollTop * 2 ) + '%' )
    const [ left, setLeft ] = useState( '10%' )

    window.onscroll = () => {
        document.addEventListener('scroll', () => {
            setScrollTop( document.documentElement.scrollTop )
        })
    }

    useEffect( () => {
        if ( scrollTop > percentHeight ) {
            setPosition('relative')
            setTop('0px')
            setLeft('0px')
            setWidth('20%')
        }
        
        return ( () => {
            setPosition('absolute')
            setTop(( center - scrollTop * 2 ) + '%' )
            setLeft('10%')
            setWidth( screenWidth < 600 ? '300px' : '340px' )
        })
    }, [ scrollTop, screenWidth, percentHeight, center ])
    
    function _handlePosition() {
        return {
            position: position,
            top: top,
            left: left,
            width: width,
            transition: 'width 0.6s'
        }
    }

    return (
        <>
            <div id='logo'
                className='logo'
                style={_handlePosition()}
            >
                <img src={logo} alt="Estúdio Dana | Estampas exclusivas" />
            </div>
        </>
    )
}