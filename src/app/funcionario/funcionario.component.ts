import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { FuncionarioService } from '../core/service/funcionario.service';
import { Funcionario } from '../core/models/funcionario.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'id', label: 'N.', width: 80 },
    { name: 'nome', label: 'Nome' }
  ];

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  async ngOnInit() {
    this.funcionarios = await this.funcionarioService.fetch();
  }

  async excluir(funcionario: Funcionario) {
    if (await this.funcionarioService.delete(funcionario.id)) {
      this.funcionarios = await this.funcionarioService.fetch();
    }
  }
}
