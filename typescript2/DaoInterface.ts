export interface DaoInterface<T> {
  nomeTabela: string

  inserir (object: T): boolean
  atualizar(objeto: T): boolean
  remover(id: number): T
  selecionar (id: number ): T
  selcionarTodos ():[T]
}