import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { MovimentacaoComponent } from './movimentacao.component';

@NgModule({
  imports: [
    CommonModule,
    MovimentacaoRoutingModule
  ],
  declarations: [
    MovimentacaoComponent
  ]
})
export class MovimentacaoModule { }
