"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (objeto) {
        console.log('logica de atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica para remoção');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('logica para selecionar');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selcionarTodos = function () {
        console.log('logica para selecionar Todos');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
