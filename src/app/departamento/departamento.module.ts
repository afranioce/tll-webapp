import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { MatCardModule, MatIconModule } from '@angular/material';
@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    DepartamentoRoutingModule
  ],
  declarations: [
    DepartamentoComponent
  ]
})
export class DepartamentoModule { }
