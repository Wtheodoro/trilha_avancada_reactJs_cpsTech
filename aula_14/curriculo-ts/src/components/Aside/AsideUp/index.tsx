import React, { useState } from 'react';
import { Contatos } from '../../../types/fakeAPI';
import Button from '../../Button';
import EachContact from '../../EachContact';

interface ContatoProps {
  contatos: Contatos[]
}

const AsideUp = (props: ContatoProps) => {
  const info = props.contatos

  const [contact, setContact] = useState(true)
  
  const showContacts = () => {
    setContact(!contact)
  }
  
  return (
    <>
      <div className="sidebar">
        <h3>Contatos</h3>
        {
          contact
          ? <div onClick={showContacts}><Button name={"Esconder Contatos"}/></div>
          : <div onClick={showContacts}><Button name={"Mostrar Contatos"}/></div>
        }

        {
          contact &&
          info.map(i => (
            <EachContact contact={i} key={i.id}/>
          ))
        }
      </div>

    </>
  );
}

export default AsideUp;
