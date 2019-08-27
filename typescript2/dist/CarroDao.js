"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica para remoção');
        return Object();
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('logica para selecionar');
        return Object();
    };
    CarroDao.prototype.selcionarTodos = function () {
        console.log('logica para selecionar Todos');
        return Object();
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
