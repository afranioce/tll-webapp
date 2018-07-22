import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoEditarComponent } from './departamento-editar/departamento-editar.component';
import { DepartamentoCriarComponent } from './departamento-criar/departamento-criar.component';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'departamentos/novo',
    component: DepartamentoCriarComponent,
    canActivate: [AuthGuard],
    data: { title: 'Novo departamento' }
  },
  {
    path: 'departamentos/:id',
    component: DepartamentoDetalheComponent,
    canActivate: [AuthGuard],
    data: { title: 'Ver departamento' }
  },
  {
    path: 'departamentos/:id/editar',
    component: DepartamentoEditarComponent,
    canActivate: [AuthGuard],
    data: { title: 'Editar departamento' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
