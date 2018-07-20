import { Departamento } from './departamento.model';

export class Funcionario {
    id: number;
    nome: string;
    departamento: Departamento = new Departamento();
}
