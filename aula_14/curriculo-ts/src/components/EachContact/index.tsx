import React from 'react';
import { Contatos } from '../../types/fakeAPI';

interface EachProps {
  contact: Contatos
}

const EachContact = (props: EachProps) => {

  const { tipo, contato } = props.contact
  
  return (
    <>
      <div className="lista-de-contatos">
        <li>
          <div className="item-contato">
            <h4>{tipo}</h4>
            <p>{contato}</p>
          </div>
        </li>
      </div>
    </>
  );
}

export default EachContact;
