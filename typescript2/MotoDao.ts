import { DaoInterface } from './DaoInterface'
import Moto from './Moto'

export class MotoDao implements DaoInterface {

    nomeTabela: string = 'tb_moto'

    inserir (object: Moto): boolean {
      console.log('logica de insert') 
      return true
    }

    atualizar (object: Moto): boolean {
      console.log('logica de atualizar')
      return true
    }

    remover (id: number): Moto{
      console.log('logica para remoção')
      return Object()
    }

    selecionar (id: number): Moto {
      console.log('logica para selecionar')
      return Object()
    }

    selecionarTodos ():[any] {
      console.log('logica para selecionar Todos')
      return Object()

    }
}