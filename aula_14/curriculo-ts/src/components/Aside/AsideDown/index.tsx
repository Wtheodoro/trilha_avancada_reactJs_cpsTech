import React from 'react';
import { Educacao } from '../../../types/fakeAPI';

interface EducacaoProps {
  educacao: Educacao[]
}

const AsideDown = (props: EducacaoProps) => {
  const info = props.educacao
  return (
    <>
    <div className="sidebar">
      <h3>Educação</h3>
      <div className="lista-de-formacao">
        {
          info.map(i =>(
            <li key={i.id}>
              <h4>{i.instituicao}</h4>
              <p>{i.curso}</p>
            </li>
          ))
        }
      </div>
    </div>
    </>
  );
}

export default AsideDown;
