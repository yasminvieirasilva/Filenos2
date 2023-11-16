
import React from 'react';
import oliver from '../assets/image 38.png'
import jade from '../assets/image 40.png'
import george from '../assets/image 41.png'
import logo from '../assets/image 1.png'

const LojaLeopardo = () => {
    return (
        <div>

            <div className=' logoPequena'>
                <img src={logo} className=' logoPequena' />
            </div>

            <h1> Nossos leopardos</h1>

            <h4>Escolha entre nossos vários leopardos e obtenha uma pelúcia personalizada!</h4>

            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'>Oliver</h3>
                        <p>Oliver é um Leopardo que foi criado até seus dois anos como um gato doméstico. Após os indivíduos perceberem sua origem, o jogaram na estrada no norte do estado de santa Catarina.
                        </p>

                        <div className='topicos1'>
                            <ul>
                                <h3>Características de Oliver:</h3>
                                <li>Espécie: Java </li>
                                <li>Altura: 73 cm </li>
                                <li>Idade: 9 anos </li>
                                <li>Ong de resgate: Panthera Brasil </li>
                                <li>Peso:  30 kg  </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={oliver} alt='teste' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'>Jade</h3>
                        <p>Oliver é um Leopardo que foi criado até seus dois anos como um gato doméstico. Após os indivíduos perceberem sua origem, o jogaram na estrada no norte do estado de santa Catarina. </p>

                        <div className='topicos1'>
                            <ul>
                                <h3>Características da Jade:</h3>
                                <li>Espécie: Leopardo-das-neves </li>
                                <li>Altura: 66 cm </li>
                                <li>Idade: 11 anos </li>
                                <li>Ong de resgate: Panthera Brasil </li>
                                <li>Peso:  26 kg </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={jade} alt='teste' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'>George</h3>
                        <p>George foi resgatado de um incêndio florestal no norte da áfrica por um fazendeiro. O homem o largou longe de seu habitat natural, gerando grandes traumas ao animal.</p>

                        <div className='topicos1'>
                            <ul>
                                <h3>Características do Georde:</h3>
                                <li>Espécie: Leopardo-Persa</li>
                                <li>Altura: 70 cm </li>
                                <li>Idade: 12 anos </li>
                                <li>Ong de resgate: Panthera Brasil </li>
                                <li>Peso:  30 kg  </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={george} alt='teste' />
                        </div>
                    </div>
                </div>
            </div>

            <div >
        <p className='retangulo'>Objetivo:  O dinheiro arrecadado na venda das pelúcias  sera convertido em doações para as ONG’s parceiras</p>
        <p className='retangulo'>Distribuição:  40% ONG’s , 30% artesões,  30% Manutenção da Filenos  </p>
      </div>

        </div>


    );
}

export default LojaLeopardo