import React, { Component } from 'react'
import '../Style/about.css'
import Portrait from '../Components/Deck';
import imagem from '../Content/Pictures/Foto minha de perfil.jpg'
import imagem2 from '../Content/Pictures/FormaturaFilho.jpeg'
import imagem3 from '../Content/Pictures/Cafezinho35.jpeg'

export default class About extends Component {
  render() {
    const { activeSection } = this.props;
    if (activeSection !== "About") return null

    return (
      <div className='AboutContainer' style={{ visibility: activeSection === "About" ? "visible" : "hidden" }}>
        <div className="gallery">
        <Portrait links={ [imagem, imagem2, imagem3] } />
        </div>
        <p className='AboutText' id='Apresentação'>
          Na trilha da tecnologia desde junho de 2022, me chamo Tiago Alves, um entusiasta da programação e 
          pai dedicado aos 23 anos. Minha jornada na <a href='https://www.betrybe.com/formacao-desenvolvimento-web' target="_blank" rel="noopener noreferrer"> Trybe </a> culminou em uma formatura sólida em dezembro de 2023, 
          consolidando minha paixão por construir soluções digitais inovadoras.
        </p>
        <p className='AboutText' id='Especialidades'>
        Especializado em React, JavaScript, TypeScript e C#, lidero com destreza projetos de design e desenvolvimento web. 
        Além de minha habilidade técnica, sou movido por uma paixão genuína pela aprendizagem constante e pela busca da 
        excelência em cada desafio que abraço.
        </p>
        <p className='AboutText' id='MinhaVida'>
        Fora do código, minha vida é um equilíbrio entre a cozinhar, caminhar no parque e brincar com meu filho. 
        Essas experiências moldam minha abordagem para a tecnologia, inspirando-me a criar soluções 
        que não apenas funcionem, mas que também possuam um impacto significativo e positivo nas vidas das pessoas.
        </p>
        <p className='AboutText' id='Callback'>
        Assim, convido você a explorar meu portfólio, onde cada projeto é mais do que linhas de código; é o reflexo do meu comprometimento, 
        criatividade e visão de um futuro digital vibrante e inclusivo.
        </p>

      </div>
    )
  }
}
