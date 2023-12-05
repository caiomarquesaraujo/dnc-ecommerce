import React from 'react'
import './index.scss'
import logo from '../../assets/logo-dnc.png'
import cartlogo from '../../assets/cartshop.png'

function HeaderMenu() {
    return (
        <header className='header-menu'>
            <img src={logo} alt="logo" className='header-menu__logo' />
            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>
            <div className='header-menu__cart-shop'>
                <h1>Meu carrinho</h1>
                <img src={cartlogo} alt="cartlogo" />
            </div>

        </header>
    )
}

export default HeaderMenu