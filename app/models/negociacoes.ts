import { negociacao } from "./negociacao.js";

export class negociacoes {
    private Negociacoes: negociacao[] = [];

    adiciona(negociacao: negociacao) {
        this.Negociacoes.push(negociacao);
    }

    lista(): readonly negociacao[]{
        return this.Negociacoes;
    }
}