export interface FakeAPI {
  nome: string,
  ocupacao: string,
  resumo: string
  perfilProfissional: string,
  avatar: string,
  bio: string,
  contatos: Contatos[],
  educacao: Educacao[],
  experiencia: Experiencia[]  
}

export interface Contatos {
    id: number,
    tipo: string,
    contato: string
}

export interface Educacao {
    id: number,
    instituicao: string,
    curso: string
}

export interface Experiencia {
    id: number,
    cargo: string,
    periodo: string,
    empresa: string,
    local: string,
    conteudo: string,
}