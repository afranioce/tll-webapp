import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { FormControl } from '@angular/forms';

import { MovimentacaoService } from '../core/service/movimentacao.service';
import { Movimentacao } from '../core/models/movimentacao.model';
import { FuncionarioService } from '../core/service/funcionario.service';
import { Funcionario } from '../core/models/funcionario.model';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'id', label: 'N.', width: 80 },
    { name: 'valor', label: 'Valor', numeric: true, format: DECIMAL_FORMAT }
  ];
  funcionariosControl = new FormControl();

  movimentacoes: Movimentacao[];
  funcionarios: Funcionario[];

  constructor(
    private movimentacaoService: MovimentacaoService,
    private funcionarioService: FuncionarioService
  ) { }

  async ngOnInit() {
    this.movimentacoes = await this.movimentacaoService.fetch();
    this.funcionarios = await this.funcionarioService.fetch();
  }

  async excluir(movimentacao: Movimentacao) {
    if (await this.movimentacaoService.delete(movimentacao.id)) {
      this.movimentacoes = await this.movimentacaoService.fetch();
    }
  }

  async filtrarPorFuncionario(event: any) {
    if (event.value) {
      this.movimentacoes = await this.funcionarioService.getMovimentacoes(event.value);
    } else {
      this.movimentacoes = await this.movimentacaoService.fetch();
    }
  }
}
