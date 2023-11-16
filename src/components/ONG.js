import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image 1.png'
import leao2 from '../assets/image 20.png'
import leopardo2 from '../assets/image 21.png'
import onca2 from '../assets/image 22.png'
import tigre2 from '../assets/image 23.png'


const ONG = () => {
    return (

      <div> 
        <div className=' logoPequena'>
  <img src={logo} className=' logoPequena'/>
</div>

<div className='tituloOng'>
<h1>Organizações Não Governamentais</h1>
</div>

<div className='topicos'>
<ul>
<li className='bolinhas'><a href="https://ranchodosgnomos.org.br/novo/">Rancho dos Gnomos: </a>Tigres, Leões e Onças pintadas</li>
<li className='bolinhas'><a href="https://pantherabr.com.br/">Panthera Brasil:</a>Tigres, Leões e Leopardos</li>
<li className='bolinhas'><a href="https://amparanimal.org.br/ampara-silvestre/">Ampara  Silvestre:</a>  Onça pintadas e animais silvestres brasileiros</li>
<li className='bolinhas'><a href="https://lionguardians.org/">Lion Guardians: </a>Leões Africanos </li>
</ul>
</div>
    
<div className='imagens'>
  <div className='img1'>
  <img className='naImg' src={leopardo2}/>
  </div>
  <div className='img1'>
  <img className='naImg' src={tigre2}/>
  </div>
  <div className='img1'>
  <img className='naImg' src={onca2}/>
  </div>
  <div className='img1'>
  <img className='naImg' src={leao2}/>
  </div>
  </div>
      
<div >
  <p className='retangulo'>(48)99837-1060</p>
  <p className='retangulo'>filenos.instituição@gmail.org.br</p>
  </div>

      </div>
    
    );
}
export default ONG;