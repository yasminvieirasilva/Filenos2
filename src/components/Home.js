import React from 'react';
import { Link } from 'react-router-dom';
import Leao from '../assets/image 9.png'
import Tigre from '../assets/image 10.png'
import Leopardo from '../assets/image 11.png'
import OncaPintada from '../assets/image 13.png'
import leao1 from '../assets/image 34.png'
import tigre1 from '../assets/image 30.png'
import onca1 from '../assets/Frame 2 (1).png'
import leopardo1 from '../assets/image 29.png'
import logo from '../assets/image 1.png'
import logoUser from '../assets/user 1.png'
const Home = () => {

  return (
    <div>
      <div className=' logoUsuario'>
          <Link to="/login"><img src={logoUser} /></Link>
        </div>
  

        <div>
          <img src={logo} />
        </div>
        <div className='center'>
          <div className='Equipe'>
            <Link to="./equipe">Equipe</Link>
          </div>
          <div className='ONG'>
            <Link to="./ong">ONGs</Link>
          </div>
          <div className='Store'>
            <Link to="./store">Store</Link>
          </div>
        </div>

        <div className='Usuario'>
            <Link to="./usuario">Usuario</Link>
          </div>
          <div className='Pagamento'>
            <Link to="/pagamento">Pagamento</Link>
          </div>
          <div className='CompraDupla'>
            <Link to="/compraDupla">CompraDupla</Link>
          </div>
          <div className='CompraUnico'>
            <Link to="/compraUnico">CompraUnico</Link>
          </div>


        <div className='imagens'>
          <div className='img1'>
            <img className='naImg' src={leopardo1} />
          </div>
          <div className='img1'>
            <img className='naImg' src={tigre1} />
          </div>
          <div className='img1'>
            <img className='naImg' src={onca1} />
          </div>
          <div className='img1'>
            <img className='naImg' src={leao1} />
          </div>
        </div>

        <h1> Família Felídea</h1>
        <p>Família de mamíferos, da ordem dos carnívoros, constituída por trinta e quatro espécies. Os animais desta família são geralmente bem adaptados à alimentação carnívora, apresentando mandíbulas fortes, grandes dentes caninos, molares especializados para cortar e esmagar. Possuem garras fortes, capazes de agarrar. Possuem cinco dedos nas patas anteriores e quatro dedos nas posteriores. Os Felídeos são geralmente esbeltos.
          Em geral, caçam de emboscada, saltando sobre a presa após uma breve corrida. Os pequenos Felídeos (género Felis) estão muito espalhados pelo mundo com exceção da Austrália e Nova Zelândia (embora aí exista o gato doméstico) e nas regiões mais frias do globo terrestre. Os grandes felinos estão classificados no gênero Panthera (leão e tigre). Embora sendo, em geral, maiores que os outros felinos é sobretudo a capacidade de rugir que os distingem
        </p>

        <h1> Tigre e Suas Características </h1>
        <div>
          <img src={Tigre} />
        </div>
        <h3>A classificação taxonômica completa do tigre é:</h3>
        <ul style={{ listStyleType: 'none' }}>
          <li>Reino: Animalia</li>
          <li>Filo: Chordata</li>
          <li>Classe: Mammalia</li>
          <li>Ordem: Carnivora</li>
          <li>Família: Felidae</li>
          <li>Gênero: Panthera</li>
          <li>Espécie: Panthera tigri</li>
        </ul>

        <h3>Características do tigre</h3>

        <p>O tigre é o maior felino do mundo e apresenta pescoço curto e grosso, ombros largos, grandes membros e longas garras. Esse animal possui caninos compridos, sendo o tigre-de-bengala portador dos maiores caninos de felinos do planeta. O canino de um tigre-de-bengala pode medir entre 7,5 e 10 cm de comprimento. Tigres são animais que apresentam excelente visão, olfato apurado e grande força, características que os tornam excelentes caçadores."

          Bastante conhecidos pelo seu padrão de pelagem, os tigres possuem pelos laranja-avermelhados e linhas pretas dispostas ao longo de seu corpo. Em algumas subespécies, os pelos laranja-avermelhados dão lugar a pelos quase brancos. Na região da barriga, parte inferior dos membros, garganta e focinho, têm pelos brancos ou de coloração mais clara. Há também uma região branca acima dos olhos e nas bochechas. Ao redor dos olhos, há linhas escuras, em geral simétricas.

          O tamanho dos tigres varia muito de uma subespécie para outra. Os tigres-siberianos se distinguem como os maiores, com os machos podendo pesar cerca de 423 kg e atingir cerca de 3,7 m de comprimento. As fêmeas dos tigres-siberianos apresentam aproximadamente 2,4 m e 168 kg. Dentre as subespécies viventes, os tigres-de-sumatra são os menores. Enquanto os machos medem cerca de 2,34 m e pesam aproximadamente 136 kg, as fêmeas atingem 1,98 m e 91 kg.</p>

        <h3>Habitat do tigre</h3>
        <p>No passado, tigres se espalhavam amplamente pela Ásia. Atualmente, eles habitam menos de 6% de sua distribuição histórica, sendo observadas populações de tigres no nordeste da China, Coreia, Rússia e partes da Índia e da região do Himalia.

          Nesses locais, os tigres são encontrados em uma grande variedade de habitats, ocorrendo em regiões de florestas, pastagem, tundra e taiga, por exemplo. A disponibilidade de alimento está relacionada com o local onde os tigres habitam.

          Tigres, geralmente, são animais solitários. As fêmeas mantêm territórios ou áreas de vida que geralmente não se sobrepõem entre si. As áreas de vida de machos, normalmente, se sobrepõem ao território de uma a três fêmeas. O tamanho da área de vida dos tigres está diretamente relacionado com a disponibilidade de presas, sendo menor em locais onde as presas são abundantes.

          Esses animais são capazes de se comunicarem por meio de vocalização, odores e marcas visuais, como arranhões em árvores e marcas no solo. No que diz respeito à vocalização, os tigres são capazes de emitir rugidos, gemidos, rosnados, dentre outros sons. Cada som reflete uma intenção específica</p>

        <h3>Tigres são mamíferos predadores oportunistas que se alimentam de diferentes grupos de animais, como:</h3>
        <p>peixes;
          pássaros;
          anfíbios;
          répteis;
          mamíferos.

          São capazes de capturar animais maiores do que eles, como elefantes e rinocerontes. A maior parte da dieta, no entanto, inclui grandes ungulados, como veados e búfalos.
          Os tigres são mais ativos à noite e se movem silenciosamente para capturar as suas presas. Em geral, esses animais matam suas presas por emboscada, saltando sobre elas após se aproximarem sem serem percebidos.</p>

        <h3>Reprodução do tigre</h3>
        <p>Os tigres são animais solitários, e machos e fêmeas associam-se apenas para o acasalamento. O período de gestação do tigre é de, em média, 103 dias. As fêmeas dão à luz de um a sete filhotes, sendo o tamanho médio da ninhada de dois a três filhotes. Ao nascerem, esses animais são cegos, e seus olhos só se abrem após cerca de duas semanas após o nascimento.

          O filhote começa a seguir a mãe por volta dos dois meses de idade, e a ingestão de alimentos sólidos também tem início nesse período. O desmame ocorre, em média, 100 dias após o nascimento. Com cerca de cinco a seis meses de idade, os filhotes começam a caçar. Eles podem permanecer com a mãe até aproximadamente três anos.</p>

        <h1>Leão Suas Características</h1>
        <div>
          <img src={Leao} />
        </div>

        <h3>Classificação taxonômica completa:</h3>


        <ul style={{ listStyleType: 'none' }}>
          <li>Reino: Animalia</li>
          <li>Filo: Chordata</li>
          <li>Classe: Mammalia</li>
          <li>Ordem: Carnivora</li>
          <li>Família: Felidae</li>
          <li>Gênero: Panthera</li>
          <li>Espécie: Panthera leo</li></ul>




        <h3>Características Gerais do Leão</h3>

        <p>As fêmeas diferenciam-se dos machos por, geralmente, não apresentarem juba.
          Segundo maior felino do mundo, o leão perde em tamanho apenas para o tigre. Os leões apresentam de 1,37 a 2 m de tamanho (corpo e cabeça), e sua cauda pode atingir até 100 cm de comprimento. O peso varia entre 120 e 190 quilos, mas vale destacar que já foram descritos indivíduos com mais de 250 kg. O maior leão já encontrado pesava 272 kg.
          Os leões apresentam uma pelagem amarela dourada, a qual é importante para garantir a camuflagem em meio à vegetação da savana. Quando jovens, apresentam manchas claras em sua pelagem, as quais desaparecem à medida que se tornam mais velhos. Os machos se destacam pela presença de jubas, pelos longos localizados ao redor de sua cabeça. Algumas fêmeas podem apresentar jubas, mas não se sabe por que isso ocorre.</p>

        <h3>Habitat do Leão</h3>
        Os leões-africanos são encontrados vivendo em planícies ou savanas, habitando, atualmente, o leste e sul da África. As populações de leões tiveram grandes perdas nos últimos anos, não sendo encontradas em muitos países africanos. Uma das ameaças aos leões é o ser humano.

        <h3>Comportamento do leão</h3>

        <p>Os leões se destacam por serem felinos que formam grupos sociais, sendo possível encontrar dentro desses grupos uma hierarquia bem definida. As fêmeas atuam garantindo a captura de alimento e o cuidado com os filhotes, enquanto os machos são responsáveis pela proteção do grupo contra o ataque de outros leões. Para proteger seu território, os machos eliminam a urina como forma de marcar a área e emitem rugidos fortes, que alertam e afugentam animais que invadem a sua área.

          Os grupos de leões podem ser pequenos ou formados por muitos indivíduos, existindo grupos com cerca de 40 leões. Geralmente, nesses grupos, encontram-se de três a quatro machos, e os demais são fêmeas e seus filhotes. Os filhotes fêmeas tendem a permanecer no grupo, enquanto os machos podem formar outros bandos, roubando a liderança de um leão que liderava outro grupo. Os leões vivem, em média, 25 anos em cativeiro e 15 anos em vida selvagem.</p>

        <h3>Alimentação do Leão</h3>
        <p>Os leões são carnívoros, ou seja, alimentam-se de outros animais. Entre os animais predados por leões, estão a zebra, girafa, antílope, gnu e outros animais da savana. A captura desses animais é feita pelas fêmeas, as quais, normalmente, trabalham em grupo. Os leões podem também roubar presas que foram capturadas por outros animais, como pelas hienas.

          Os leões ocasionalmente bebem água quando esta está disponível no ambiente, entretanto estão muito adaptados a sobreviver em ambientes áridos, retirando a água de que precisam de suas presas.</p>

        <h3>Reprodução dos Leões</h3>
        <p>As leoas atingem a maturidade sexual por volta dos 4 anos de idade, enquanto o macho está apto para a reprodução com cerca de 5 anos. A reprodução atinge o pico durante a estação chuvosa. Geralmente a gestação dura cerca de 109 dias, e o número médio de filhotes por gestação é três.

          Filhotes de leão podem ser mortos por machos que invadem o grupo.
          Os filhotes ficam em esconderijos até que atinjam cerca de 8 semanas de idade. Eles são capazes de correr quando possuem por volta de 1 mês. A faixa de idade de desmame é de 7 a 10 meses; porém, esses filhotes ainda são dependentes do grupo até que atinjam pelo menos 16 meses de idade. As leoas criam seus filhotes de maneira comunitária. Quando as ninhadas são próximas, uma fêmea pode amamentar os filhotes de outra leoa.

          As leoas tendem a ter filhotes a cada dois anos, entretanto esse período pode ser encurtado quando a fêmea perde seu filhote, o que pode acontecer, por exemplo, quando um macho intruso entra no bando e mata os filhotes.</p>

        <h1>Leopardo e Suas Características</h1>
        <div>
          <img src={Leopardo} />
        </div>
        <h3>Classificação taxonômica completa:</h3>

        <ul style={{ listStyleType: 'none' }}>
          <li>Reino: Animalia </li>
          <li>Filo: Cordados</li>
          <li>lasse: Mammalia</li>
          <li>Ordem: Carnivora</li>
          <li>Família: Felidae</li>
          <li>Gênero: Panthera</li>
          <li>Espécie: Panthera Pardus</li>
        </ul>

        <h3>Características gerais do leopardo</h3>

        <p>O leopardo é um grande felino que se destaca por apresentar pelagem que varia do amarelo-claro ao laranja-avermelhado e várias manchas negras, que geram confusão na hora de diferenciá-los de outros membros do gênero Panthera, como as onças-pintadas. Essas manchas, que lembram uma rosa, são chamadas de rosetas.

          No caso das onças-pintadas, as rosetas apresentam pontos pretos no centro. Isso não ocorre com os leopardos. Suas manchas não possuem esses pontos e são menores e mais próximas do que as observadas nas onças.

          Os leopardos são felídeos de grande porte que podem pesar 90 kg e atingir dois metros de comprimento. Vale destacar que seu tamanho varia geograficamente, sendo os leopardos de savana e floresta maiores que os das montanhas e desertos. Outro ponto importante a ser destacado é que os machos tendem a ser maiores que as fêmeas.

          Os leopardos possuem pescoço longo, suas patas são curtas e sua cauda é longa, o que ajuda o animal a manter seu equilíbrio. As patas apresentam garras fortes, afiadas e retráteis. O corpo do animal é flexível. Os leopardos são animais solitários com hábitos crepusculares/noturnos. Habitam grandes territórios e marcam sua região com urina, fezes e marcas de garras. São capazes de emitir sons.

          Os leopardos são animais muito rápidos, podendo atingir 60 km/h. Além disso, são capazes de saltar mais de seis metros na horizontal e três metros na vertical. Sua agilidade, associada à sua visão e audição apuradas, torna-os ótimos caçadores. Como predadores dos leopardos, podemos citar leões, tigres, hienas e cães selvagens.

          Panteras-negras
          Os leopardos de pelagem negra são chamados de panteras-negras. Esses leopardos apresentam a condição do melanismo, desencadeado por um gene que faz com que o indivíduo produza um excesso de pigmento. Uma teoria é a de que o melanismo ajuda na camuflagem desses animais em ambientes onde há abundância de sombras, como florestas fechadas.</p>
        <h3>Habitat do Leopardo</h3>
        <p>Os leopardos estão distribuídos pela África e Ásia e ocupam uma grande variedade de habitat. São observados, por exemplo, em regiões de savanas, florestas, bosques, habitat montanhosos e até desertos.</p>

        <h3>Alimentação do Leopardo</h3>

        <p>Os leopardos são animais carnívoros que se alimentam de diferentes animais, incluindo grandes mamíferos.
          O leopardo é um animal carnívoro, alimentando-se, portanto, de outros animais. Sua dieta está relacionada com a disponibilidade de presas bem como a presença de outros competidores maiores. Os leopardos se alimentam de diferentes animais, por exemplo, répteis, pássaros, e pequenos e grandes mamíferos, como os antílopes. Em locais onde há competidores, como leões e hienas, os leopardos escondem sua presa sob a vegetação ou a colocam sobre galhos de árvores.</p>

        <h3>Reprodução do Leopardo</h3>
        <p>O leopardo é um animal que tem vários parceiros. A estação reprodutiva dura o ano todo, porém atinge seu pico durante a estação chuvosa. O cio das fêmeas dura sete dias, e elas possuem um ciclo de 46 dias. A gestação dura, aproximadamente, 96 dias, e as fêmeas dão à luz, em média, a cada 15 a 24 meses. A cada gestação, nascem, em média, dois filhotes.

          Os filhotes de leopardo, ao nascerem, pesam cerca de um quilo e permanecem com os olhos fechados pela primeira semana. As mães deixam seus filhotes escondidos em tocas para evitar que eles sejam predados por outros animais, como leões. Por volta de seis a oito semanas de idade, os filhotes começam a sair da toca com mais regularidade, e esse é o momento em que iniciam a ingestão de alimento sólido. O desmame ocorre quando eles atingem cerca de três meses, e tornam-se independentes quando atingem 20 meses aproximadamente.</p>

        <h1>Onça-Pintada e Suas Características</h1>
        <div>
          <img src={OncaPintada} />
        </div>
        <ul style={{ listStyleType: 'none' }}>
          <li>Reino: Animalia</li>
          <li>Filo: Chordata</li>
          <li>Classe: Mammalia</li>
          <li>Ordem: Carnivora</li>
          <li>Família: Felidae</li>
          <li>Gênero: Panthera</li>
          <li>Espécie: Panthera onça</li>
        </ul>

        <h3>Características da Onça-Pintada</h3>
        <p>A onça-pintada, assim como leão, tigre, leopardo-das-neves e leopardo, é um animal do gênero Panthera. Esses animais apresentam uma marcante característica em comum: a capacidade de produzir um som bastante grave chamado esturro, que atua na comunicação. A onça-pintada destaca-se como a única representante do gênero Panthera no nosso continente.
          É um animal de grande porte e, por isso, é considerado o maior felino das Américas e o maior carnívoro da América do Sul. Segundo o Instituto da Onça-Pintada, seu peso varia entre 35 kg e 130 kg, e seu comprimento pode variar de 1,7 metro a 2,4 metros.
          Uma das características mais marcantes desse animal é sua pelagem. A pelagem da onça varia de amarelo-claro a castanho e destaca-se pela presença de várias manchas em formato de roseta. Essas manchas apresentam tamanhos variados e funcionam como se fossem a impressão digital do animal, o que significa que as manchas tornam cada onça única. Pesquisadores podem, por exemplo, fotografar esses animais em uma área e conseguir diferenciá-los por meio da análise de suas manchas.
          A onça-pintada é um animal que apresenta, principalmente, hábitos crepusculares, porém é descrito, muitas vezes, como um animal de hábito noturno. Em alguns locais, no entanto, essa espécie é ativa tanto durante o dia quanto durante a noite, como é o caso das onças-pintadas encontradas na Mata Atlântica.</p>

        <h3>Habitat da onça-pintada</h3>
        <p>Segundo o Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio), a onça-pintada apresenta como área de distribuição do “norte do México ao noroeste da América do Sul (Colômbia e Equador), leste do Peru e Bolívia (leste dos Andes), por todo Paraguai e Brasil e norte da Argentina”. Vale salientar que essa espécie vem diminuindo suas populações nessas áreas em virtude, principalmente, da ação humana, que destrói o habitat desse animal e realiza a caça predatória.
          As onças são encontradas em diferentes ambientes, que vão desde florestas até ambientes abertos.
          Nos países em que são encontradas, as onças-pintadas ficam em ambientes de florestas e em ambientes abertos. No Brasil, podemos observá-las, por exemplo, na Amazônia, na Mata Atlântica, no Pantanal e no Cerrado.</p>

        <h3>Alimentação da onça-pintada</h3>
        <p>A onça-pintada é um animal carnívoro, ou seja, que se alimenta de outros animais. Geralmente, seus alimentos são animais silvestres, como veados, queixadas, catetos, tatus, veados e jacarés.</p>

        <h3>Reprodução da onça-pintada</h3>
        <p>As onças-pintadas vivem, geralmente, de maneira solitária, interagindo com indivíduo de outro sexo apenas no período de reprodução. Geralmente, a fêmea atinge a maturidade sexual entre 2 anos e 3 anos de idade, e o macho entre 3 anos e 4 anos.
          No período reprodutivo, os machos são atraídos pelo odor produzido pela fêmea e pela vocalização por elas produzida. Os machos e fêmeas interagem por alguns dias e copulam nesse período. Após a fecundação, inicia-se a gestação, que pode durar entre 90 dias e 110 dias.
          Normalmente, uma onça dá à luz um ou dois filhotes, podendo nascer até quatro. A mãe cuida de seus filhotes até que eles atinjam cerca de dois anos, período utilizado para garantir que conseguirão sobreviver sozinhos no meio.</p>
      </div>

  );
}

export default Home;