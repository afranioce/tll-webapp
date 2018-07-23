import { Departamento } from './departamento.model';
import { Movimentacao } from './movimentacao.model';

export class Funcionario {
    id: number;
    nome: string;
    departamento: Departamento = new Departamento();
    movimentacoes: Movimentacao[];
}
