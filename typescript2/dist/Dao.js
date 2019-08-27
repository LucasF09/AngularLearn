"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (objeto) {
        console.log('logica de atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica para remoção');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica para selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica para selecionar Todos');
        return Object();
    };
    return Dao;
}());
exports.Dao = Dao;
