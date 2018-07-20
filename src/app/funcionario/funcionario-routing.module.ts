import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioEditarComponent } from './funcionario-editar/funcionario-editar.component';
import { FuncionarioCriarComponent } from './funcionario-criar/funcionario-criar.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';

const routes: Routes = [
  {
    path: 'funcionarios/novo',
    component: FuncionarioCriarComponent,
    data: { title: 'Novo funcionario' }
  },
  {
    path: 'funcionarios/:id',
    component: FuncionarioDetalheComponent,
    data: { title: 'Ver funcionario' }
  },
  {
    path: 'funcionarios/:id/editar',
    component: FuncionarioEditarComponent,
    data: { title: 'Editar funcionario' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
