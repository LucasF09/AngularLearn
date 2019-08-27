import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('New Fiesta', 4);
carro.acelerar();
carro.acelerar();

let moto = new Moto();
moto.acelerar();
moto.acelerar();

let concessionaria = new Concessionaria('',[])

console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorirarioDeFuncionamento())