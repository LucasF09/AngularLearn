import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {

      nomeTabela: string = ''

    inserir (object: T ): boolean {
     console.log('logica de insert') 
      return true
    }
    atualizar(objeto: T ): boolean {
      console.log('logica de atualizar')
      return true
    }
    remover(id: number): T {
      console.log('logica para remoção')
      return Object()
    }
    selecionar (id: number): T {
      console.log('logica para selecionar')
      return Object ()
    }
    selecionarTodos ():[T] {
      console.log('logica para selecionar Todos')
      return Object()

    }
}