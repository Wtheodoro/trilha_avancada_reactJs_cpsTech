function programador(B1: dev, B2: string[]) {
    // nothing
}

interface dev {
    nome: string,
    idade: number,
    empresa: string,
    famoso: boolean
}
const dev = {
    nome: 'Alexandre o Grande',
    idade: 44,
    empresa: 'Constantinopla',
    famoso: true
}

const conquistas: string[] = ['Aquemênida', 'Pérsia', 'Piauí']

programador(dev, conquistas)