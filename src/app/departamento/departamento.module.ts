import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoCriarComponent } from './departamento-criar/departamento-criar.component';
import { DepartamentoEditarComponent } from './departamento-editar/departamento-editar.component';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';
import { DepartamentoComponent } from './departamento.component';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import {
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatButtonModule
} from '@angular/material';
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

    DepartamentoRoutingModule
  ],
  declarations: [
    DepartamentoComponent,
    DepartamentoCriarComponent,
    DepartamentoEditarComponent,
    DepartamentoDetalheComponent
  ],
  providers: [DepartamentoService]
})
export class DepartamentoModule { }
