import { Endereco } from './endereco.model';
import { Responsavel } from './responsavel.model';

export class Abrigo {
  usuarios: any;
  nome: string;
  email: string;
  telefone: string;
  descricao: string;
  endereco: Endereco;
  responsavel: Responsavel;

  constructor () {
    this.endereco = new Endereco();
    this.responsavel = new Responsavel();
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.descricao = '';
  }
}
