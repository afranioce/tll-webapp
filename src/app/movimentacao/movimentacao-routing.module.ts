import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentacaoCriarComponent } from './movimentacao-criar/movimentacao-criar.component';
import { MovimentacaoEditarComponent } from './movimentacao-editar/movimentacao-editar.component';

const routes: Routes = [
  {
    path: 'movimentacoes/novo',
    component: MovimentacaoCriarComponent,
    data: { title: 'Novo movimentacao' }
  },
  {
    path: 'movimentacoes/:id/editar',
    component: MovimentacaoEditarComponent,
    data: { title: 'Editar movimentacao' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentacaoRoutingModule { }
