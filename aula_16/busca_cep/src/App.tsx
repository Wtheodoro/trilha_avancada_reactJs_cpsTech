import React, { useState } from 'react'
import api from '../src/services/api'
import { CepInfo } from './types/CepInfo';
import '../src/styles/style.css'

function App() {

  const [cep, setCep] = useState<string>('')
  const [info, setInfo] = useState<CepInfo>()

  const getInfo = () => {
    api.get(`/${cep}/json/`)
    .then(response => setInfo(response.data))
  }


  return (
    <div className="box">

      <div>
        <h1>BUSCADOR</h1>
        <input type="text" placeholder="CEP" onChange={(event) => setCep(event.target.value)} />
        <input type="submit" value="Buscar CEP" onClick={getInfo}/>
      </div>

      <div>
        <p>{info?.uf}</p>
        <p>{info?.localidade}</p>
        <p>{info?.cep}</p>
        <p>{info?.bairro}</p>
        <p>{info?.complemento}</p>
        <p>{info?.logradouro}</p>
        <p>{info?.ddd}</p>
        <p>{info?.ibge}</p>
        <p>{info?.gia}</p>
        <p>{info?.siafi}</p>
      </div>
      
    </div>

  );
}

export default App;
