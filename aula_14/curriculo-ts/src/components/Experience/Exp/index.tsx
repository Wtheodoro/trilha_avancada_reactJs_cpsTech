import React from 'react';
import { Experiencia } from '../../../types/fakeAPI';

interface infoProps {
  info: Experiencia
}

const Exp = (props: infoProps) => {

  const { cargo, periodo, empresa, local, conteudo } = props.info

  return (
    <>
      <div className="experience-item">
        <div>
          <h4>{cargo}</h4>
          <span>{periodo}</span>
          <strong>{empresa}</strong>
          <span>{local}</span>
        </div>
        <p>
          {conteudo}
        </p>
      </div>
    </>
  );
}

export default Exp;
