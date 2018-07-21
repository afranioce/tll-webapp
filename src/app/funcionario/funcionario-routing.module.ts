import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioEditarComponent } from './funcionario-editar/funcionario-editar.component';
import { FuncionarioCriarComponent } from './funcionario-criar/funcionario-criar.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'funcionarios/novo',
    component: FuncionarioCriarComponent,
    canActivate: [AuthGuard],
    data: { title: 'Novo funcionario' }
  },
  {
    path: 'funcionarios/:id',
    component: FuncionarioDetalheComponent,
    canActivate: [AuthGuard],
    data: { title: 'Ver funcionario' }
  },
  {
    path: 'funcionarios/:id/editar',
    component: FuncionarioEditarComponent,
    canActivate: [AuthGuard],
    data: { title: 'Editar funcionario' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
