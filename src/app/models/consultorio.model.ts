import { Endereco } from './endereco.model';

export class Consultorio {
    nome: string;
    email: string;
    telefone: string;
    endereco: Endereco;
    descricao: string;

    constructor() {
      this.endereco = new Endereco();
    }


}
