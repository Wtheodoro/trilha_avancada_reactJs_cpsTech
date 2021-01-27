import React from 'react';

import './styles/dark/DarkApp.css'
import './styles/dark/DarkNeonButton.css'

import AsideContainer from './components/Aside/AsideContainer';
import Biography from './components/Biography';
import ExpContainer from './components/Experience/ExpContainer';
import Perfil from './components/Perfil';
import Track from './components/Track';
import { FakeAPI } from './types/fakeAPI';


function App() {

  const fakeAPI: FakeAPI =  
  {
    nome: 'Elon Reeve Musk',
    ocupacao: 'CEO',
    resumo: 'Levarei a humanidade a marte!',
    perfilProfissional: 'Bom em tudo',
    avatar: 'https://www.abc.net.au/cm/rimage/9815730-3x2-xlarge.jpg?v=2',
    bio: 'Empreendedor norte-americano de origem sul-africana. Cofundador e CEO da companhia Tesla Motors, pioneira na fabricação de carros elétricos. Fundador e CEO da SpaceX, a primeira empresa a vender um voo comercial para a Lua!',
    contatos: [
      {
        id: 1,
        tipo: 'telefone',
        contato: '19 6666-6666'
      },
      {
        id: 2,
        tipo: 'email',
        contato: 'ermusk@xpace.com'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'Universidade da Pensilvânia',
        curso: 'Física'
      },
      {
        id: 2,
        instituicao: 'Wharton Schoolof Business',
        curso: 'Economia'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'CEO, CTO, ENG de produto',
        periodo: 'Agosto 2019 - Atualmente',
        empresa: 'SpaceX',
        local: 'Hawthrone, Califórnia, EUA',
        conteudo: 'Fundador da Space Exploration Rechnologies. Atuante na missão que lançou o primeiro veículo para a Estação Espacial Internacional'
      },
      {
        id: 2,
        cargo: 'CEO',
        periodo: 'Agosto 2018 - Agosto 2019',
        empresa: 'Tesla Motors',
        local: 'Palo Alto, Califórnia, EUA',
        conteudo: 'Promotor de um produto inovador, que de fato inova mas nunca é entregue no prazo. Ainda bem que o Walison não comprou um carro desse ainda, talvez ele espere mais um pouco pra adiquirir um...'
      }
    ]
}

const { avatar, bio, contatos, educacao, nome, ocupacao, resumo, experiencia,  } = fakeAPI

const bioInfo = [ nome, ocupacao, resumo ]

  return (
    <main>
      <>
        <Perfil foto={avatar}/>
        <Biography bio={bioInfo}/>
        <Track biography={bio}/>
        <AsideContainer infoContact={contatos} infoEdu={educacao}/>
        <ExpContainer data={experiencia}/> 
      </>
    </main>
  );
}

export default App;
