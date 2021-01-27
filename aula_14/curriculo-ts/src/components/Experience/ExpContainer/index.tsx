import React from 'react';
import { Experiencia } from '../../../types/fakeAPI';
import Exp from '../Exp';

interface dataProps {
  data: Experiencia[]
}

const ExpContainer = (props: dataProps) => {
  return (
    <>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        {props.data.map(i => (
          <Exp info={i} key={i.id} />
        ))}
      </div>
    </>
  );
}

export default ExpContainer;
