import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from '../../core/models/funcionario.model';
import { FuncionarioService } from '../../core/service/funcionario.service';
import { Departamento } from '../../core/models/departamento.model';
import { DepartamentoService } from '../../core/service/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html',
  styleUrls: ['./funcionario-criar.component.scss']
})
export class FuncionarioCriarComponent implements OnInit {
  funcionarioForm: FormGroup;
  funcionario: Funcionario;
  departamentos: Departamento[];

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private departamentoService: DepartamentoService,
    private router: Router
  ) {
    const funcionario = new Funcionario();
    this.criarFormulario(funcionario);
  }

  async ngOnInit() {
    this.departamentos = await this.departamentoService.fetch();
  }

  criarFormulario(funcionario: Funcionario) {
    this.funcionarioForm = this.fb.group({
      nome: [funcionario.nome, [Validators.required, Validators.maxLength(200)]],
      departamento: [funcionario.departamento.id, Validators.required]
    });
  }

  enviar() {
    if (this.funcionarioForm.invalid) {
      return;
    }

    const funcionario = this.fromForm2Entity(this.funcionarioForm.value);

    this.funcionarioService.save(funcionario).then(() => {
      this.router.navigate(['funcionarios']);
    }).catch(() => {
      alert('Ocorreu um erro ao tentar salvar');
    });
  }

  fromForm2Entity(formValue: any): Funcionario {
    const funcionario = new Funcionario();
    funcionario.nome = formValue.nome;
    funcionario.departamento = formValue.departamento;
    return funcionario;
  }

}
