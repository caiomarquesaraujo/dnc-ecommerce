import React from 'react';
import Header from '../../components/Header/Header';
import './index.scss';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <section className='login'>
            <Header />
            <form className='login__form'>
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>você pode entrar com o seu CPF</h2>
                <div className='login__form--wrapper'>
                    <label htmlFor="name">Digite Seu CPF:</label>
                    <input type="text" placeholder='Nome Completo' className='login__input--name' />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id='password' placeholder='********' />
                </div>
                <button type='submit'>
                    <Link to={'/home'}>Entrar </Link>
                </button>
            </form>
        </section>
    )
}

export default Login