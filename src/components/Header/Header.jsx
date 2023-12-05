import React from 'react'
import Logo from '../../assets/logo-dnc.png'
import './index.scss'

function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt='DNC Logo' />
        </div>
    )
}

export default Header