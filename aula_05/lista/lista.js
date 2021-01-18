class Lista {
  constructor() {
    this.inputItem = document.querySelector("#item")
    this.botaoAdicionar = document.querySelector("#adicionar")
    this.lista = document.querySelector("#lista")
    this.botaoApagar = document.querySelector("#apagar")
  }

  apagarLista() {
    this.lista.innerHTML = ''
  }

  adicionarNaLista(minhaLista) {
    console.log(typeof minhaLista)
    console.log(minhaLista)
    let listaHTML = ''

    minhaLista.map( (params) => {
      listaHTML += 
      `
      <li>
          ${params}
      </li>
      `
    })

    this.lista.innerHTML = listaHTML
  }

}