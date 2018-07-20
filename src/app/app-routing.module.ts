import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';

const routes: Routes = [
  {
    path: 'departamentoes',
    component: DepartamentoComponent,
    data: { title: 'Departamentoes' }
  },
  {
    path: 'funcionarios',
    component: FuncionarioComponent,
    data: { title: 'Funcionarios' }
  },
  {
    path: 'movimentacoes',
    component: MovimentacaoComponent,
    data: { title: 'Movimentacoes' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
