"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao';
//import { CarroDao } from './CarroDao'
//import Carro from './Carro'
//import { MotoDao} from './MotoDao'
//import Moto from './Moto'
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = require("./Dao");
// let dao3:CarroDao = new CarroDao()
// let carro = new Carro ('', 0);
// dao3.inserir(carro);
// let dao4:MotoDao = new MotoDao()
// let moto = new Moto ('', 0);
// dao4.inserir(carro);
//let dao:ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var dao4 = new Dao_1.Dao();
var dao5 = new Dao_1.Dao();
dao4.inserir(concessionaria);
dao5.remover(5);
