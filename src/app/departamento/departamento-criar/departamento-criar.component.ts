import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Departamento } from '../../core/models/departamento.model';
import { DepartamentoService } from '../../core/service/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-criar',
  templateUrl: './departamento-criar.component.html',
  styleUrls: ['./departamento-criar.component.scss']
})
export class DepartamentoCriarComponent implements OnInit {
  departamentoForm: FormGroup;
  departamento: Departamento;

  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private router: Router
  ) {
    const departamento = new Departamento();
    this.criarFormulario(departamento);
  }

  ngOnInit() {
  }

  criarFormulario(departamento: Departamento) {
    this.departamentoForm = this.fb.group({
      nome: [departamento.nome, [Validators.required, Validators.maxLength(100)]]
    });
  }

  enviar() {
    if (this.departamentoForm.invalid) {
      return;
    }

    const departamento = this.fromForm2Entity(this.departamentoForm.value);
    this.departamentoService.save(departamento).then(() => {
      this.router.navigate(['departamentos']);
    }).catch(() => {
      alert('Ocorreu um erro ao tentar salvar');
    });
  }

  fromForm2Entity(formValue: any): Departamento {
    const departamento = new Departamento();
    departamento.nome = formValue.nome;
    return departamento;
  }

}
