import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa'

    inserir (object: Pessoa ): boolean {
     console.log('logica de insert') 
      return true
    }
    atualizar(objeto: Pessoa ): boolean {
      console.log('logica de atualizar')
      return true
    }
    remover(id: number): Pessoa {
      console.log('logica para remoção')
      return new Pessoa ('','')
    }
    selecionar (id: number): Pessoa {
      console.log('logica para selecionar')
      return new Pessoa ('','')
    }
    selecionarTodos ():[any] {
      console.log('logica para selecionar Todos')
      return [new Pessoa ('','')]

    }

}