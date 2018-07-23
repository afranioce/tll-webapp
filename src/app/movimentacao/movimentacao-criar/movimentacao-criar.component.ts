import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Movimentacao } from '../../core/models/movimentacao.model';
import { MovimentacaoService } from '../../core/service/movimentacao.service';
import { Funcionario } from '../../core/models/funcionario.model';
import { FuncionarioService } from '../../core/service/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentacao-criar',
  templateUrl: './movimentacao-criar.component.html',
  styleUrls: ['./movimentacao-criar.component.scss']
})
export class MovimentacaoCriarComponent implements OnInit {
  movimentacaoForm: FormGroup;
  movimentacao: Movimentacao;
  funcionarios: Funcionario[];

  constructor(
    private fb: FormBuilder,
    private movimentacaoService: MovimentacaoService,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {
    const movimentacao = new Movimentacao();
    this.criarFormulario(movimentacao);
  }

  async ngOnInit() {
    this.funcionarios = await this.funcionarioService.fetch();
  }

  criarFormulario(movimentacao: Movimentacao) {
    this.movimentacaoForm = this.fb.group({
      valor: [movimentacao.valor, Validators.required],
      funcionario: [movimentacao.funcionario.id, Validators.required]
    });
  }

  enviar() {
    if (this.movimentacaoForm.invalid) {
      return;
    }

    const movimentacao = this.fromForm2Entity(this.movimentacaoForm.value);

    this.movimentacaoService.save(movimentacao).then(() => {
      this.router.navigate(['movimentacoes']);
    }).catch(() => {
      alert('Ocorreu um erro ao tentar salvar');
    });
  }

  fromForm2Entity(formValue: any): Movimentacao {
    const movimentacao = new Movimentacao();
    movimentacao.valor = formValue.valor;
    movimentacao.funcionario = formValue.funcionario;
    return movimentacao;
  }

}
