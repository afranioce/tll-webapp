import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'departamentos',
    component: DepartamentoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Departamentos' }
  },
  {
    path: 'funcionarios',
    component: FuncionarioComponent,
    canActivate: [AuthGuard],
    data: { title: 'Funcionarios' }
  },
  {
    path: 'movimentacoes',
    component: MovimentacaoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Movimentacoes' }
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
