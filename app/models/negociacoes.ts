import { negociacao } from "./negociacao.js";

export class negociacoes {
    private Negociacoes: Array<negociacao> = [];

    adiciona(negociacao: negociacao) {
        this.Negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<negociacao>{
        return this.Negociacoes;
    }
}