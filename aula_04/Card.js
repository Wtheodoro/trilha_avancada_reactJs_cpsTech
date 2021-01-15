// defini a classe card
class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.noticias = document.querySelector("#list")
  }

  // monta o HTML do card com os dados do JSON
  mostraNoticia(dados) {
    console.log(dados)
    // cria uma variavel que ira armazenar todo esse HTML
    let card = ''

    dados.noticias.map(function (noticia) {
      
      card += `
      <div class="card">
        <h2>${noticia.titulo}</h2>
        <h3>${noticia.chamada}</h3>
        <a href="${noticia.link}">Leia mais</a>
      </div>
      `
    })

    this.noticias.innerHTML = card
  }
}
