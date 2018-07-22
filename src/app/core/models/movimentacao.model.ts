import { Funcionario } from './funcionario.model';

export class Movimentacao {
    id: number;
    valor: number;
    funcionario: Funcionario = new Funcionario();
}
