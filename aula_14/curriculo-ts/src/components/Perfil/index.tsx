import React from 'react';

interface PerfilProps {
    foto: string
}

const Perfil = (props: PerfilProps) => {
  return (
    <>
      <div className="perfil">
        <img src={props.foto} alt="Foto do Brabo"/>
      </div>
    </>
  );
}

export default Perfil;
