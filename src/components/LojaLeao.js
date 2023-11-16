import React from 'react';
import aslam from '../assets/image 32.png'
import snow from '../assets/image 33.png'
import maximusLian from '../assets/image 39.png'
import logo from '../assets/image 1.png'

const LojaLeao = () => {
    return (
        <div>

            <div className=' logoPequena'>
                <img src={logo} className=' logoPequena' />
            </div>

            <h1> Nossos Leões</h1>

            <h4>Escolha entre nossos vários leões e obtenha uma pelúcia personalizada!</h4>
<div>
<div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'> Aslam</h3>
                        <p>Este não tão pequeno leãozinho foi resgatado da fome e solidão. Hoje vive em conjunto com outros de sua espécie feliz e saudável.
                        </p>

                        <div className='topicos1'>
                            <ul>
                                <h3> Características de Aslan:</h3>
                                <li>Espécie: Leão Africano </li>
                                <li>Altura: 1.70m</li>
                                <li>Idade: 4 anos</li>
                                <li>Ong de resgate: Lion Guardians</li>
                                <li>Peso:  140kg </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={aslam} alt='teste' />
                        </div>
                    </div>
                

            </div>
            <button className='botaoPdupla'> <p className='BotaoPagamentos'>Confirmar!</p></button>
            </div>

                
            
</div>
            

           


            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'> Snow </h3>
                        <p>Snow foi resgatado de um zoológico onde passava fome e sede. A ONG o resgatou a tempo, pois ele estava preste a ser vendido para caçadores ilegais.
                        </p>

                        <div className='topicos1'>
                            <ul>
                                <h3> Características de Snow:</h3>
                                <li>Espécie: Leão Branco  </li>
                                <li>Altura: 1.87m </li>
                                <li>Idade: 6 anos </li>
                                <li>Ong de resgate: Rancho dos Gnomos</li>
                                <li>Peso:  158kg </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={snow} alt='teste' />
                        </div>
                    </div>
                </div>


            </div>


            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'>Maximus e Liam</h3>
                        <p>Maximus e Liam são dois irmãos que foram resgatados de um Circo no norte da India </p>

                        <div className='topicos1'>
                            <ul>
                                <h3> Características de Maximus:</h3>
                                <li>Espécie: Leão Branco </li>
                                <li>Altura: 1.87m </li>
                                <li>Idade: 6 anos </li>
                                <li>Ong de resgate: Panthera Brasil</li>
                                <li>Peso:  158kg </li>
                            </ul>
                        </div>

                        <div className='topicos1'>
                            <ul>
                                <h3>Características de Liam:</h3>
                                <li>Espécie: Leão Branco </li>
                                <li>Altura: 1.80m </li>
                                <li>Idade: 6 anos </li>
                                <li>Ong de resgate: Panthera Brasil</li>
                                <li>Peso:  161kg
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={maximusLian} alt='teste' />
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

export default LojaLeao;