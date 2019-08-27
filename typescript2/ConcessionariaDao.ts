import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir (object: Concessionaria): boolean {
     console.log('logica de insert') 
      return true
    }
    atualizar(objeto: Concessionaria): boolean {
      console.log('logica de atualizar')
      return true
    }
    remover(id: number): Concessionaria{
      console.log('logica para remoção')
      return new Concessionaria('',[])
    }
    selecionar (id: number ): Concessionaria{
      console.log('logica para selecionar')
      return new Concessionaria('',[])
    }
    selcionarTodos (): [any] {
      console.log('logica para selecionar Todos')
      return [new Concessionaria('',[])]

    }

}