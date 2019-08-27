"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/*-----------criar carros -------------*/
var carroA = new Carro_1.default('Ferrari', 2);
var carroB = new Carro_1.default('LandRover', 4);
var carroC = new Carro_1.default('New Fiesta', 4);
/*-----------montar lista de carros -------------*/
// let listaDeCarros: Carro [] =[carroA,carroB,carroC] outra forma de escrever \/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
/*-----------teste lista carros -------------*/
//console.log(concessionaria.mostrarLista())
/*-----------comprar o carro -------------*/
var cliente = new Pessoa_1.default('Lucas', 'New Fiesta');
// console.log(cliente.mostrarCarroPreferido())
concessionaria.mostrarLista().map(function (carro) {
    if (carro['modelo'] == cliente.mostrarCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
