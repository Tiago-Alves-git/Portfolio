import React from 'react';
import '../Style/experiencia.css';

const Experiencia = ({ experiencia, activeSection }) => {
  // const { cargo, empresa, periodo, descricao } = experiencia;
  if (activeSection === "Experiencias" || "Experiences")
  return (
    <div className='ExpWrap' style={{ visibility: activeSection === "Experiencias" || "Experiences" ? "visible" : "hidden" }} id='Experiencia'>
      { experiencia.map((exp, index) => {
        return (
          <div className="experiencia" key={ index }>
      <h2>{exp.cargo}</h2>
      <h3>{exp.empresa}</h3>
      <p className="periodo">{exp.periodo}</p>
      <p>{exp.descricao}</p>
    </div>
        )
      }) }
    </div>
  );
  else return null
};

export default Experiencia;
