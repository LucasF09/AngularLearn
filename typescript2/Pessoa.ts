import Carro from './Carro'

export default class Pessoa {

  private nome: string;
  private carroPreferido: string;
  private carro: any;

  constructor(nome: string, carroPreferido: string){
    this.nome = nome;
    this.carroPreferido = carroPreferido;
    

  }

  public mostrarNome(): string {
    return this.nome;
  }

  public mostrarCarroPreferido(): string{
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro): void{
    this.carro = carro;
  }

  public dizerCarroQueTem (): Carro {
    return this.carro;
  }

}