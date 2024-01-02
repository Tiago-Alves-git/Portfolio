import React, { Component } from 'react'
import github from '../Style/Icons/icons8-github-80 (1).png';
import linkedin from '../Style/Icons/icons8-linkedin-80 (1).png';
import message from '../Style/Icons/icons8-wechat-64.png';
import '../Style/hero.css'
import NavItem from '../Components/NavItems';

export default class Hero extends Component {
  render() {
    const { updateState, activeSection } = this.props;
    return (
      <div className='LeftContent'>
        <div className='Hero Text'>
        <h1> Tiago Alves </h1>
        <h2> Desenvolvedor FullStack e Designer de Produtos </h2>
        </div>
        <ul style={{ padding: 0 }}>
      <NavItem label="About" updateState={updateState} activeSection = {activeSection}/>
      <NavItem label="Projects" updateState={updateState} activeSection = {activeSection}/>
      <NavItem label="Experiencia" updateState={updateState} activeSection = {activeSection}/>
      <NavItem label="Contato" updateState={updateState} activeSection = {activeSection}/>
     </ul>
        <div className='Contacts' style={{ display: "flex",position: "fixed", bottom: 100, gap: "20px" }}>
          <a href='https://github.com/Tiago-Alves-git' target="_blank" rel="noopener noreferrer">
          <img src={github} 
          alt='gitHub link'
          style={{ color: "#fff" }}
          />
          </a>
          <a href='https://www.linkedin.com/in/tiago-fernandes-b5854a17b/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='x'></img>
          </a>
          <a href='https://wa.me/5561996312336' target="_blank" rel="noopener noreferrer">
          <img src={message} alt='x'></img>
          </a>
        </div>
      </div>
    )
  }
}
