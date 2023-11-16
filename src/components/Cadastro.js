import React from 'react';
import logo from '../assets/image 1.png'
const Cadastro = () => {
    return (
        <div>
            <div>
                <img src={logo} />
            </div>

            <h1>Não tem cadastro? Faça já!</h1>
            <h4>Insira suas informações para poder navegar tranquilamente na filenos</h4>

            <div>

                <h3 className='textoCadastro'>Nome completo:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>
                <h3 className='textoCadastro'>Nome de usuário:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>

                <h3 className='textoCadastro2'>E-mail:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>
                <h3 className='textoCadastro2'>Telefone:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>
                <h3 className='textoCadastro2'> Endereço:</h3>

                <h4 className='escritaEndereco'>Rua:</h4>
                <label>
                    <input className='entradas2' name="myInput" />
                </label>

                <h4 className='escritaEndereco'>Número:</h4>
                <label>
                    <input className='entradas2' name="myInput" />
                </label>

                <h4 className='escritaEndereco'>CPF:</h4>
                <label>
                    <input className='entradas2' name="myInput" />
                </label>

                <h4 className='escritaEndereco'>Complemento</h4>
                <label>
                    <input className='entradas2' name="myInput" />
                </label>
            </div>
            <div>

                <h3 className='textoCadastro'>Crie uma senha:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <div>
                <h3 className='textoCadastro3'>Confirme sua senha:</h3>
                <label>
                    <input className='entradas' name="myInput" />
                </label>
            </div>

            <di>
                <button className='botaoCad'> <h3 className='textoBotao'>Cadastrar Conta</h3></button>
            </di>
            
          
        </div>



    )

}
export default Cadastro