import React from 'react';

const Lista: React.FC = () => {
  return (
    <>
      <p>Você concorda em doar os seguintes órgãos?</p>
      <ol data-testid="lista">
        <li>Esôfago</li>
        <li>Intestino Delgado</li>
        <li>Coração</li>
        <li>Rim</li>
        <li>Laringe</li>
        <li>Pulmão</li>
        <li>Cérebro</li>
        <li>Medula espinhal</li>
      </ol>
    </>
  );
}

export default Lista;
