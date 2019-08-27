export interface DaoInterface {
  nomeTabela: string

  inserir (object: any): boolean
  atualizar(objeto: any): boolean
  remover(id: number): any
  selecionar (id: number ): any
  selcionarTodos ():[any]
}