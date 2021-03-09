import { Component } from 'react'
import Contact from './Contact'

class Agenda extends Component<any> {

  state = {
    array:[ { nome: 'Abraão', numero: '0800-777' }, { nome: 'Eva', numero: '02'}, { nome: 'Caim', numero: '666'}, { nome: 'Isaque', numero: '01-21:1-3'}, { nome: 'Davi', numero: '1234-4321'} ],
    showContact: false
  }

  showHolyContacts = () => {
    this.setState({ showContact: true })
  }


  render () {
    return (
      <div>
        <button onClick={this.showHolyContacts}>Mostrar</button>
        {
          this.state.showContact === true &&
          this.state.array.map((i: any) => (
            <div>
              <Contact nome={i.nome} numero={i.numero} key={i.nome}/>
            </div> 
          ))
        }
      </div>
    )
  }
}

export default Agenda