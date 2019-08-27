import { DaoInterface } from './DaoInterface'
import  Carro  from './Carro'

export class CarroDao implements DaoInterface {

  nomeTabela: string = 'tb_carro'

  inserir (object: Carro): boolean {
    console.log('logica de insert')
    return true
  }

  atualizar(object: Carro): boolean {
    console.log('logica de atualizar')
    return true
  }

 remover(id: number):Carro{
      console.log('logica para remoção')
      return Object()
    }

      selecionar (id: number ): Carro{
      console.log('logica para selecionar')
      return Object()
    }
    selcionarTodos ():[any] {
      console.log('logica para selecionar Todos')
      return Object()

    }
}