import React from 'react';
import { Contatos, Educacao } from '../../../types/fakeAPI';
import AsideDown from '../AsideDown';
import AsideUp from '../AsideUp';

interface InfoProps {
  infoContact: Contatos[], 
  infoEdu: Educacao[]
}

const AsideContainer = (props: InfoProps) => {
  return (
    <>
      <aside>
        <AsideUp contatos={props.infoContact} />
        <AsideDown educacao={props.infoEdu} />
      </aside>
    </>
  );
}

export default AsideContainer;
