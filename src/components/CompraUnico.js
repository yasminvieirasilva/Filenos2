import React from 'react';
import logo from '../assets/image 1.png'
import pix2 from '../assets/image 52.png'

const CompraUnico = () => {
    return (
        <div>

            <div className=' logoPequena'>
                <img src={logo} className=' logoPequena' />
            </div>


            <h1> A pelúcia de xxxx já é quase sua!</h1>
            <div className='topicos'>
                <ul>
                    <li className='bolinhas'> Valor: R$100,00</li>
                    <li className='bolinhas'> Pelúcia:</li>
                    <li className='bolinhas'>Forma de pagamento: Pix</li>
                    <li className='bolinhas'>Valor fixo de Frete: R$20,00</li>
                </ul>
            </div>

            <h2>QR Code para o pagamento</h2>
            <div>
                <img src={pix2} />
            </div>

            <div>
                <button className='botaoPdupla'> <p className='BotaoPagamentos'>Confirmar!</p></button>
            </div>

            <div >
                <p className='retangulo'>(48)99837-1060</p>
                <p className='retangulo'>filenos.instituição@gmail.org.br</p>
            </div>

        </div>
    )
}

export default CompraUnico;