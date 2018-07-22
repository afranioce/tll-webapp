import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { MovimentacaoComponent } from './movimentacao.component';
import { MovimentacaoCriarComponent } from './movimentacao-criar/movimentacao-criar.component';
import { MovimentacaoEditarComponent } from './movimentacao-editar/movimentacao-editar.component';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import {
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatButtonModule,
  MatTooltipModule,
  MatDividerModule
} from '@angular/material';
import { MovimentacaoService } from '../core/service/movimentacao.service';

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
    MatDividerModule,

    MovimentacaoRoutingModule
  ],
  declarations: [
    MovimentacaoComponent,
    MovimentacaoCriarComponent,
    MovimentacaoEditarComponent
  ],
  providers: [
    MovimentacaoService,
  ]
})
export class MovimentacaoModule { }
