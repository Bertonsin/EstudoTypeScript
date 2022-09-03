export class negociacoes {
    constructor() {
        this.Negociacoes = [];
    }
    adiciona(negociacao) {
        this.Negociacoes.push(negociacao);
    }
    lista() {
        return this.Negociacoes;
    }
}
