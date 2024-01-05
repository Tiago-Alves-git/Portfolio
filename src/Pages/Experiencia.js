import React from 'react';
import '../Style/experiencia.css';

const Experiencia = ({ experiencia, activeSection }) => {
  // const { cargo, empresa, periodo, descricao } = experiencia;
  if (activeSection !== "Experiencia") return null

  return (
    <div className='ExpWrap'>
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
};

export default Experiencia;
