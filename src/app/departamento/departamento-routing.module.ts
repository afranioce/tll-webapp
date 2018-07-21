import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoEditarComponent } from './departamento-editar/departamento-editar.component';
import { DepartamentoCriarComponent } from './departamento-criar/departamento-criar.component';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';

const routes: Routes = [
  {
    path: 'departamentos/novo',
    component: DepartamentoCriarComponent,
    data: { title: 'Novo departamento' }
  },
  {
    path: 'departamentos/:id',
    component: DepartamentoDetalheComponent,
    data: { title: 'Ver departamento' }
  },
  {
    path: 'departamentos/:id/editar',
    component: DepartamentoEditarComponent,
    data: { title: 'Editar departamento' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
