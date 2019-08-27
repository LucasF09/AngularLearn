import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/*-----------criar carros -------------*/
let carroA = new Carro('Ferrari', 2);
let carroB = new Carro ('LandRover', 4);
let carroC = new Carro ('New Fiesta', 4);


/*-----------montar lista de carros -------------*/
// let listaDeCarros: Carro [] =[carroA,carroB,carroC] outra forma de escrever \/
let listaDeCarros: Array<Carro>  = [carroA,carroB,carroC]
let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)



/*-----------teste lista carros -------------*/
//console.log(concessionaria.mostrarLista())



/*-----------comprar o carro -------------*/
let cliente = new Pessoa('Lucas', 'New Fiesta')
// console.log(cliente.mostrarCarroPreferido())

concessionaria.mostrarLista().map((carro: Carro)=>{
  
    if (carro['modelo']==cliente.mostrarCarroPreferido()){
      cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())