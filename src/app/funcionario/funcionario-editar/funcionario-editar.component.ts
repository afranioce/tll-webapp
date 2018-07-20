import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from '../../core/models/funcionario.model';
import { FuncionarioService } from '../../core/service/funcionario.service';
import { Departamento } from '../../core/models/departamento.model';

@Component({
  selector: 'app-funcionario-editar',
  templateUrl: './funcionario-editar.component.html',
  styleUrls: ['./funcionario-editar.component.scss']
})
export class FuncionarioEditarComponent implements OnInit {
  funcionarioForm: FormGroup;
  funcionario: Funcionario = new Funcionario();
  departamentos: Departamento[];

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute
  ) {
    this.criarFormulario();
  }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionario = await this.funcionarioService.get(id);

    this.funcionarioForm.setValue({
      nome: this.funcionario.nome,
      departamento: this.funcionario.departamento.id
    });

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

  criarFormulario() {
    this.funcionarioForm = this.fb.group({
      nome: [this.funcionario.nome, [Validators.required, Validators.maxLength(200)]],
      departamento: [this.funcionario.departamento.id, Validators.required]
    });
  }

  enviar() {
    if (this.funcionarioForm.invalid) {
      return;
    }

    const funcionario = this.fromForm2Entity(this.funcionarioForm.value);
    this.funcionarioService.update(funcionario.id, funcionario);
  }

  fromForm2Entity(formValue: any): Funcionario {
    this.funcionario.nome = formValue.nome;
    this.funcionario.departamento = formValue.departamento;
    return this.funcionario;
  }
}
