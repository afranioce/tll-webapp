import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from '../../core/models/funcionario.model';
import { FuncionarioService } from '../../core/service/funcionario.service';
import { Departamento } from '../../core/models/departamento.model';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html',
  styleUrls: ['./funcionario-criar.component.scss']
})
export class FuncionarioCriarComponent implements OnInit {
  funcionarioForm: FormGroup;
  funcionario: Funcionario;
  departamentos: Departamento[];

  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService) {
    const funcionario = new Funcionario();
    this.criarFormulario(funcionario);
  }

  ngOnInit() {
    this.departamentos = [
      {
        id: 1,
        nome: 'Departamento 1'
      },
      {
        id: 2,
        nome: 'Departamento 2'
      }
    ];
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

    const funcionario = this.getQuestionFromFormValue(this.funcionarioForm.value);
    this.funcionarioService.save(funcionario);
  }

  getQuestionFromFormValue(formValue: any): Funcionario {
    const funcionario = new Funcionario();
    funcionario.nome = formValue.nome;
    funcionario.departamento = formValue.departamento;
    return funcionario;
  }

}
