import React from 'react';

interface BioProps {
  biography: string
}

const Track = (props: BioProps) => {
  return (
    <>
      <div className="titulo">
        perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>{props.biography}</p>
      </div>
    </>
  );
}

export default Track;
