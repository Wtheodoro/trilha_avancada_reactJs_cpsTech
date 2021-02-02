import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../src/styles/style.css'


function App() {

  const [status, setStatus] = useState<String>('')

  let inputName = useRef<HTMLInputElement>(null)
  let inputAge = useRef<HTMLInputElement>(null)
  let inputCompany = useRef<HTMLInputElement>(null)
  let inputPhone = useRef<HTMLInputElement>(null)
  let inputId = useRef<HTMLInputElement>(null)

  const postOnApi = () => {
    const name = inputName.current?.value
    const age = inputAge.current?.value
    const company = inputCompany.current?.value
    const phone = inputPhone.current?.value
    const id = inputId.current?.value

    axios.post("http://localhost:4000/users", {
      name: name,
      age: age,
      company: company,
      phone: phone,
      id: id
    })

    .then(response => setStatus("Sujeito cadastrado com sucesso!"))
  }


  return (
    <div className="App box">
      <h2>Usuarios</h2>
      <div>
        <input type="text" ref={inputName} placeholder="Nome"/>
      </div>
      <div className="">
        <input type="text" ref={inputAge} placeholder="Idade"/>
      </div>
      <div className="">
        <input type="text" ref={inputCompany} placeholder="Empresa"/>
      </div>
      <div>
        <input type="text" ref={inputPhone} placeholder="Celular"/>
      </div>
      <button onClick={postOnApi} type="submit">Enviar</button>
      <p>{status}</p>
    </div>
  );
}

export default App;
