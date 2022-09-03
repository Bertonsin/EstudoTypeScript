import { negociacao } from "../models/negociacao.js";
import { negociacoes } from "../models/negociacoes.js";

export class negociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new negociacoes();

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void{
        const Negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(Negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao(): negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new negociacao(date, quantidade, valor);
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}