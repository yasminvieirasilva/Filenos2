import React from 'react';
import logo from '../assets/image 1.png'
import pix1 from '../assets/image 53.png'

const CompraDupla = () => {
    return (
        <div>

            <div className=' logoPequena'>
                <img src={logo} className=' logoPequena' />
            </div>


            <h1> As pelúcias de xxxx e xxxx já são quase sua!</h1>
            <div className='topicos'>
                <ul>
                    <li className='bolinhas'> Valor: R$190,90</li>
                    <li className='bolinhas'> Pelúcia:</li>
                    <li className='bolinhas'>Forma de pagamento: Pix</li>
                    <li className='bolinhas'>Valor fixo de Frete: R$20,00</li>
                </ul>
            </div>

            <h2>QR Code para o pagamento</h2>
            <div>
                <img src={pix1} />
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

export default CompraDupla;