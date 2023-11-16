import React from 'react';
import { Link } from 'react-router-dom';
import leaozinho from '../assets/image 25.png'
import oncinha from '../assets/image 27.png'
import leopardinho from '../assets/image 28.png'
import tigrinho from '../assets/image 26.png'
import logo from '../assets/image 1.png'


const Store = () => {
  return (
    <div>
      <div>
        <div className=' logoPequena'>
          <img src={logo} className=' logoPequena' />
        </div>
      </div>

      <h1 className='tituloLoja'>Store</h1>
      <h3> Escolha o animalzinho de pelúcia que deseja:</h3>

      <div className=' lojinha1'>
        <div className="imagemLoja">
          <Link to="/lojaLeao"><img src={leaozinho} /></Link>
        </div>
        <div className="imagemLoja">
          <Link to="/lojaLeopardo"><img src={leopardinho} /></Link>
        </div>
        
      </div>

      <div className=' lojinha1'>
        <div className="imagemLoja">
          <Link to="/lojaOnca"><img src={oncinha} /></Link>
        </div>
        <div className="imagemLoja">
          <Link to="/lojaTigre"><img src={tigrinho} /></Link>
        </div>
        
      </div>

      <div >
        <p className='retangulo'>Objetivo:  O dinheiro arrecadado na venda das pelúcias  sera convertido em doações para as ONG’s parceiras</p>
        <p className='retangulo'>Distribuição:  40% ONG’s , 30% artesões,  30% Manutenção da Filenos  </p>
      </div>

    </div>

  );
}
export default Store;