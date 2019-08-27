"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarLista = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorirarioDeFuncionamento = function () {
        return 'De segunda a sexta das 08:00 as 18:00 e sabado das 12:00 as 16:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
