import React from 'react';
import neroKiara from '../assets/image 47.png'
import chita from '../assets/image 48.png'
import joe from '../assets/image 49.png'
import logo from '../assets/image 1.png'
const LojaTigre = () => {
    return (
        <div>

            <div>
                <div className=' logoPequena'>
                    <img src={logo} className=' logoPequena' />
                </div>

                <h1>Tigres</h1>
                <h4>Escolha entre nossos vários tigres e obtenha uma pelúcia personalizada! </h4>

                <div className='aslamLeao'>
                    <div className='textoAslam'>
                        <div className='container-textos'>
                            <h3 className='nomeAnimais'> Nero e Kiara</h3>
                            <p>Nero e Kiara, um casal apaixonante que começou uma história na índia, onde eram usados como meio de transporte de cargas.

                            </p>

                            <div className='topicos1'>
                                <ul>
                                    <h3> Características do Nero: </h3>
                                    <li>Espécie: Tigre-bengala branco </li>
                                    <li>Altura: 2.50m  </li>
                                    <li>Idade: 12 anos</li>
                                    <li>Ong de resgate:  : Panthera Brasil</li>
                                    <li>Peso:  190kg </li>
                                    <h3> Características da Kiara: </h3>
                                    <li>Espécie: Tigre-bengala branco</li>
                                    <li>Altura: 2.37m  </li>
                                    <li>Idade: 10 anos</li>
                                    <li>Ong de resgate: : Panthera Brasil</li>
                                    <li>Peso:  141kg </li>


                                </ul>
                            </div>
                        </div>

                        <div className='imagensL'>
                            <div className='img1'>
                                <img className='naImg2' src={neroKiara} alt='teste' />
                            </div>
                        </div>
                    </div>


                </div>

                <div className='aslamLeao'>
                    <div className='textoAslam'>
                        <div className='container-textos'>
                            <h3 className='nomeAnimais'> Chita</h3>
                            <p>Chita é uma dócil tigresa que sofreu abusos físicos no sul da Tailândia. Hoje ela vive tranquilamente em um zoológico</p>

                            <div className='topicos1'>
                                <ul>
                                    <h3> Características da Chita: </h3>
                                    <li>Espécie:Malaio</li>
                                    <li>Altura:  96 cm  </li>
                                    <li>Idade: 10 anos</li>
                                    <li>Ong de resgate: Rancho dos Gnomos  </li>
                                    <li>Peso:  120kg </li>
                                </ul>
                            </div>
                        </div>

                        <div className='imagensL'>
                            <div className='img1'>
                                <img className='naImg2' src={chita} alt='teste' />
                            </div>
                        </div>
                    </div>


                </div>

                <div className='aslamLeao'>
                    <div className='textoAslam'>
                        <div className='container-textos'>
                            <h3 className='nomeAnimais'> Joe</h3>
                            <p>Este pequeno felino já nasceu em meio a devastação. Após seu parto, sua mãe morreu e ele foi resgatado por um triobo de indígenas que a colocou em um abrigo para animais silvestres.  </p>

                            <div className='topicos1'>
                                <ul>
                                    <h3> Características do Theo: </h3>
                                    <li>Espécie: jaguaretê</li>
                                    <li>Altura:  50 cm  </li>
                                    <li>Idade: 10 meses</li>
                                    <li>Ong de resgate: Ampara Silvestre</li>
                                    <li>Peso:  87kg </li>
                                </ul>
                            </div>
                        </div>

                        <div className='imagensL'>
                            <div className='img1'>
                                <img className='naImg2' src={joe} alt='teste' />
                            </div>
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
export default LojaTigre