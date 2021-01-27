import React from 'react';

interface bioProps {
  bio: string[]
}

const Biography = (props: bioProps) => {
  return (
    <>
      <div className="biografia">
        <h1>{props.bio[0]}</h1>
        <div className="ocupacao">{props.bio[1]}</div>
        <p>{props.bio[2]}</p>
      </div>
    </>
  );
}

export default Biography;
