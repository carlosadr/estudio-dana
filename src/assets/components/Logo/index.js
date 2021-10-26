import React, { useState } from 'react';

import './styles.css'

import logo from '../../svg/logo.svg'

export default function Logo () {
    const [position, setPosition] = useState('absolute')
    const [top, setTop] = useState('35%')
    const [width, setWidth] = useState('340px')

    window.onscroll = () => {
        document.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 325) {
                setPosition('fixed')
                setTop('2.2%')
                setWidth('220px')
            } else {
                setPosition('absolute')
                setTop('35%')
                setWidth('340px')
            }
        })
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