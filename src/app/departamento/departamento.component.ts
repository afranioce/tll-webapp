import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { DepartamentoService } from '../core/service/departamento.service';
import { Departamento } from '../core/models/departamento.model';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'id', label: 'N.', width: 80 },
    { name: 'nome', label: 'Nome' }
  ];

  departamentos: Departamento[];

  constructor(private departamentoService: DepartamentoService) {

  }

  async ngOnInit() {
    this.departamentos = await this.departamentoService.fetch();
  }

  async excluir(departamento: Departamento) {
    if (await this.departamentoService.delete(departamento.id)) {
      this.departamentos = await this.departamentoService.fetch();
    }
  }
}
