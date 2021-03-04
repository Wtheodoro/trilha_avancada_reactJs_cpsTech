import React from 'react';

const Button = (props: any) => {

  const donateEverthing = (params: any) => {
    if (params === 'não concordo') {
      alert("você deve aceitar os termos")
    } else {
      alert("Muito obrigado, o mundo precisa de mais pessoas como você")
    }
  }

  return (
    <button onClick={()=>donateEverthing(props.type)} data-testid="btn">{props.type}</button>
  );
}

export default Button;
