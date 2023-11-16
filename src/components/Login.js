import React from 'react';
import logo from '../assets/image 1.png'
import { Link } from "react-router-dom";
const Usuario = () => {
    return (
        <div>
            <div>
                <img src={logo} />
            </div>

            <h1>Não tem cadastro? Faça já!</h1>
            <h4>Insira suas informações para poder navegar tranquilamente na filenos</h4>

            <div>
                <h3 className='textologin'>Nome de completo:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>

                <h3 className='textologin2'>E-mail:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>
                <h3 className='textologin2'>Senha:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>
                <button className='botaoCad'> <h3 className='textoBotao'>Entrar</h3></button>
            </div>

            <div className='linkcad'>
                <Link to='/cadastro'>Não possui conta no Filenos? Cadastre-se aqui!</Link>
            </div>



        </div>
    )
}

export default Usuario