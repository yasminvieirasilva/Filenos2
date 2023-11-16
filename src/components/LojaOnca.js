
import React from 'react';
import elvis from '../assets/image 45.png'
import nina from '../assets/image 44.png'
import theo from '../assets/image 46.png'
import logo from '../assets/image 1.png'


const Lojaonca = () => {
    return (
        <div>

            <div className=' logoPequena'>
                <img src={logo} className=' logoPequena' />
            </div>

            <h1>Onças-Pintadas</h1>
            <h4>Escolha entre nossas várias onças pintadas e obtenha uma pelúcia personalizada! </h4>

            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'> Elvis</h3>
                        <p>Elvis vivia em conjunto com uma tribo indigêna no norte da amazônia e por tradições do povo ele iria ser usado como sacrifício para rituais religiosos. Por sorte, uma denúncia foi feita e nosso querido foi resgatado.

                        </p>

                        <div className='topicos1'>
                            <ul>
                                <h3> Características de Elvis: </h3>
                                <li>Espécie: jaguaretê</li>
                                <li>Altura: 100 cm </li>
                                <li>Idade: 7 anos</li>
                                <li>Ong de resgate:  Ampara Silvestre</li>
                                <li>Peso:  137kg </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={elvis} alt='teste' />
                        </div>
                    </div>
                </div>


            </div>

            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'> Nina</h3>
                        <p>Nina é uma dócil onça pintada que foi resgatada grávida. Seu habitat natural estava sendo destruído drasticamente por meio de queimadas. No dia do resgate, Nina estava com a pata queimada. Hoje ela vive tranquilamente.</p>

                        <div className='topicos1'>
                            <ul>
                                <h3> Características da Nina: </h3>
                                <li>Espécie:  Canguçu</li>
                                <li>Altura:  96 cm  </li>
                                <li>Idade: 10 anos</li>
                                <li>Ong de resgate: Rancho dos Gnomos</li>
                                <li>Peso:  120kg </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imagensL'>
                        <div className='img1'>
                            <img className='naImg2' src={nina} alt='teste' />
                        </div>
                    </div>
                </div>


            </div>

            <div className='aslamLeao'>
                <div className='textoAslam'>
                    <div className='container-textos'>
                        <h3 className='nomeAnimais'> Theo</h3>
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
                            <img className='naImg2' src={theo} alt='teste' />
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
export default Lojaonca