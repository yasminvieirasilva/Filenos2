import React from 'react';
import { Link } from 'react-router-dom';
import Yasmin from '../assets/image 3.png'
import Sophia from '../assets/image 4.png'
const Equipe = () => {
    return (
        <div>
            <h1>Equipe</h1>
<p> O projeto Filenos, tem como objetivo apoiar as Organizações Não Governamentais que efetuam a proteção dos seguintes animais em risco de extinção: Leão, Tigre, Leopardo e Onça Pintada. 
Yasmin e Sophia sentem muito orgulho do que fizeram e têm a plena certeza que a Filenos irá dar visibilidade as ONG’s que protegem estas espécies em extinção. 
Leia a seguir, a carta aberta das empesárias da Rede Filenos:</p>

<h2>Equipe</h2>

<p>Yasmin Vieira: Sócia empresaria da Filenos, programadora e estudante de Biologia. </p>
<div>
  <img src={Yasmin}/>
</div>

<p>Sophia Dick: Sócia empresaria, desingner e estudande de Engenharia Química.</p>
<div>
  <img src={Sophia}/>
</div>


<h2> Cartas Abertas para o público</h2>

<p>"Queridos leitors e ONGs de Proteção,
Escrevo esta carta aberta com um coração cheio de admiração e gratidão pela incrível e incansável dedicação que vocês têm demonstrado na defesa dos tigres, leões, onças-pintadas e leopardos, algumas das criaturas mais majestosas e ameaçadas do nosso planeta. Permitam-me expressar minha profunda admiração por cada um de vocês e pelo trabalho inestimável que realizam. Agradeço também a cada um dos leitores e apoiadores da Filenos, sem vocês, nada disso seria realidade!
Com profunda gratidão e solidariedade"</p>
<p>Yasmin Vieira da Silva</p>

<p>“Meus amigos, 
A luta pela proteção dos felinos não é apenas uma questão ambiental, mas também uma questão moral. Cada uma dessas espécies desempenha um papel fundamental em seus ecossistemas, e sua extinção teria repercussões catastróficas para toda a vida na Terra. Portanto, missão das ONG’s é de importância crítica para todos nós. Essa rede foi criada pensando nos animais e em seus futuros. 
A Rede Filenos é conhecimento, a rede Filenos é empatia!”</p>
<p> Sophia Souza Dick</p>

            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Equipe;

