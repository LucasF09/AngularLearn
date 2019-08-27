//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao';
//import { CarroDao } from './CarroDao'
//import Carro from './Carro'
//import { MotoDao} from './MotoDao'
//import Moto from './Moto'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';
import { Dao } from './Dao';

// let dao3:CarroDao = new CarroDao()
// let carro = new Carro ('', 0);
// dao3.inserir(carro);
// let dao4:MotoDao = new MotoDao()
// let moto = new Moto ('', 0);
// dao4.inserir(carro);
//let dao:ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
let concessionaria = new Concessionaria ('',[]);
let pessoa:Pessoa = new Pessoa('','');

 let dao4: Dao<Concessionaria> = new Dao<Concessionaria>();
 let dao5: Dao<Pessoa> = new Dao<Pessoa>();

 dao4.inserir(concessionaria);
  dao5.remover(5);




