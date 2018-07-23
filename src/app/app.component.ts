import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  titulo = 'Controle de movimentação';
  rotas: Object[] = [
    {
      icone: 'home',
      rota: '.',
      titulo: 'Home',
    },
    {
      icone: 'shopping_cart',
      rota: 'movimentacoes',
      titulo: 'Movimentações',
    },
    {
      icone: 'assignment_ind',
      rota: 'funcionarios',
      titulo: 'Funcionários',
    },
    {
      icone: 'work',
      rota: 'departamentos',
      titulo: 'Departamentos',
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }
}
