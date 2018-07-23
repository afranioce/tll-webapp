import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioCriarComponent } from './funcionario-criar/funcionario-criar.component';
import { FuncionarioEditarComponent } from './funcionario-editar/funcionario-editar.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioComponent } from './funcionario.component';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import {
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';
import { FuncionarioService } from '../core/service/funcionario.service';
import { DepartamentoService } from '../core/service/departamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CovalentDataTableModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,

    FuncionarioRoutingModule
  ],
  declarations: [
    FuncionarioComponent,
    FuncionarioCriarComponent,
    FuncionarioEditarComponent,
    FuncionarioDetalheComponent
  ],
  providers: [
    FuncionarioService,
    DepartamentoService
  ]
})
export class FuncionarioModule { }
