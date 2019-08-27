"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('logica para remoção');
        return Object();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('logica para selecionar');
        return Object();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('logica para selecionar Todos');
        return Object();
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
