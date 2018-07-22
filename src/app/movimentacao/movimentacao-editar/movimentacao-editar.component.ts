import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Movimentacao } from '../../core/models/movimentacao.model';
import { MovimentacaoService } from '../../core/service/movimentacao.service';
import { Funcionario } from '../../core/models/funcionario.model';
import { FuncionarioService } from '../../core/service/funcionario.service';

@Component({
  selector: 'app-movimentacao-editar',
  templateUrl: './movimentacao-editar.component.html',
  styleUrls: ['./movimentacao-editar.component.scss']
})
export class MovimentacaoEditarComponent implements OnInit {
  movimentacaoForm: FormGroup;
  movimentacao: Movimentacao = new Movimentacao();
  funcionarios: Funcionario[];

  constructor(
    private fb: FormBuilder,
    private movimentacaoService: MovimentacaoService,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.criarFormulario();
  }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movimentacao = await this.movimentacaoService.get(id);

    this.movimentacaoForm.setValue({
      valor: this.movimentacao.valor,
      funcionario: this.movimentacao.funcionario.id
    });

    this.funcionarios = await this.funcionarioService.fetch();
  }

  criarFormulario() {
    this.movimentacaoForm = this.fb.group({
      nome: [this.movimentacao.valor, Validators.required],
      funcionario: [this.movimentacao.funcionario.id, Validators.required]
    });
  }

  enviar() {
    if (this.movimentacaoForm.invalid) {
      return;
    }

    const movimentacao = this.fromForm2Entity(this.movimentacaoForm.value);
    this.movimentacaoService.update(this.movimentacao.id, movimentacao).then(() => {
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
