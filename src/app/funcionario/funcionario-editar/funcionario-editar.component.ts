import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from '../../core/models/funcionario.model';
import { FuncionarioService } from '../../core/service/funcionario.service';
import { Departamento } from '../../core/models/departamento.model';
import { DepartamentoService } from '../../core/service/departamento.service';

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
    private departamentoService: DepartamentoService,
    private route: ActivatedRoute,
    private router: Router
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

    this.departamentos = await this.departamentoService.fetch();
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
    this.funcionarioService.update(this.funcionario.id, funcionario).then(() => {
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
