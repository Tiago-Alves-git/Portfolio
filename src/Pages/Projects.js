import React, { Component } from 'react'
import projects from '../Content/Projects/Projects';
import '../Style/projects.css'

export default class Projects extends Component {
  render() {
    const { activeSection, isSmallScreen } = this.props;
    if (activeSection !== "Projects") return null
    return (
      projects.map((array, index) => {
        const { Login } = array;
        return(
          <div className={ isSmallScreen ? 'ProjectWrapSmall' : 'ProjectWrap' } key={ index } style={{ visibility: activeSection === "Projects" ? "visible" : "hidden" }}>
          <div className="ProjectsCards">
          <div className='ProjectsTexts'>
            <h2 style={{ color: "white" }}> { array.Name } </h2>
            <p style={{ color: "white" }}> { array.Description } </p>
          </div>
            <div className='ProjectTech'>
              { array.Technology.map((arr, i) => {
                return (<img 
                  src={arr} 
                  alt='passTheLogoMan' 
                  key={i}
                  style={{ backgroundColor: "transparent" }}
                ></img>)
              }) }
            </div>
          <div className='ProjectsPicturesContainer'>
            <img src={array.Thumbnail} alt='wrong link' className='ProjectsPictures'></img>
          </div>
          { Login?.email ? (
          <div className='ProjectsLogin'>
            <p> Email: { Login.email } </p>
            <p> Senha: { Login.password } </p>
          </div>
             ) : null }
            <div className='CallToAction'>
            <a className='ButtonCallToAction' href={array.WebSite} target="_blank" rel="noopener noreferrer"> Ir ao site </a>
              <p> Ou </p>
              <div className='CallToGit'>
            <a className='ButtonCallToAction' href={array.Github} target="_blank" rel="noopener noreferrer"> Veja no GitHub </a>
              </div>
            </div>
          </div>
          </div>
          )
      })
    )
  }
}
