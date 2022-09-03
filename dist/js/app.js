import { negociacao } from "./models/negociacao.js";
const Negociacao = new negociacao(new Date(), 10, 100);
console.log(Negociacao.volume);
