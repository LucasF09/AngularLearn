import Carro from './Carro';
import { ConcessionariaInterface } from './ConcessionariaInterface';

export default class Concessionaria implements ConcessionariaInterface {
  private endereco: string;
  private listaDeCarros: Array<Carro>;

  constructor (endereco:string, listaDeCarros: Array<Carro>){
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco (): string {
    return this.endereco
  }

  public mostrarLista(): Array<Carro> {
    return this.listaDeCarros;
  }

  public fornecerHorirarioDeFuncionamento(): string {
    return 'De segunda a sexta das 08:00 as 18:00 e sabado das 12:00 as 16:00'
  }
}