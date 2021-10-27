import React, { useState } from 'react';
import './styles.css'

import logo from '../../svg/logo.svg'

export default function Logo () {

    const screenWidth = window.screen.width < 600

    const [position, setPosition] = useState('absolute')
    const [top, setTop] = useState( screenWidth < 600 ? '40%' : '35%' )
    const [width, setWidth] = useState( screenWidth < 600 ? '300px' : '340px' )

    window.onscroll = () => {
        if ( screenWidth < 600 ) {
            document.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 150) {
                    setPosition('fixed')
                    setTop('10px')
                    setWidth('220px')
                } else {
                    setPosition('absolute')
                    setTop('40%')
                    setWidth('300px')
                }
            })
        } else {
            document.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 325) {
                    setPosition('fixed')
                    setTop('20px')
                    setWidth('220px')
                } else {
                    setPosition('absolute')
                    setTop('35%')
                    setWidth('340px')
                }
            })
        }
    }
    
    function _handlePosition() {
        return {
            position: position,
            top: top,
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
                <img src={logo} alt="Estúdio Dana" />
            </div>
        </>
    )
}