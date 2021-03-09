import { Component } from 'react'

class Contact extends Component<any> {

  state = {
    nome : this.props.nome,
    numero: this.props.numero
  }

  render () {
    return (
      <div>
        <h4>{this.state.nome}</h4>
        <p>{this.state.numero}</p>
      </div> 
    )
  }
}

export default Contact