import { Funcionario } from './funcionario.model';

export class Movimentacao {
    id: number;
    valor: number;
    descricao: string;
    funcionario: Funcionario = new Funcionario();
}
