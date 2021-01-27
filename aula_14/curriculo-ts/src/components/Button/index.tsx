import React from 'react';

interface NameProps {
  name: string
}
const Button = (props: NameProps) => {
  return (
    <>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.name}
      </a>
    </>
    );
}

export default Button;
