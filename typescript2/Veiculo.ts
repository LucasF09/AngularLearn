export default class Veiculo {
  protected modelo: string | undefined
  private velocidade: number = 0

  public acelerar(): void {
    this.velocidade = this.velocidade + 50 
  }

  public parar(): void {
    this.velocidade = 0
  }

  public velocidadeAtual(): number {
    return this.velocidade
  }
}
