import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'GF Teste';
  rotas: Object[] = [
    {
      icone: 'home',
      rota: '.',
      titulo: 'Home',
    },
    {
      icone: 'color_lens',
      rota: 'movimentacoes',
      titulo: 'Movimentações',
    },
    {
      icone: 'view_quilt',
      rota: 'funcionarios',
      titulo: 'Funcionários',
    },
    {
      icone: 'library_books',
      rota: 'departamentos',
      titulo: 'Departamentos',
    }
  ];
}
