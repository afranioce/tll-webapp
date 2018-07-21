import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Departamento } from '../../core/models/departamento.model';
import { DepartamentoService } from '../../core/service/departamento.service';

@Component({
  selector: 'app-departamento-editar',
  templateUrl: './departamento-editar.component.html',
  styleUrls: ['./departamento-editar.component.scss']
})
export class DepartamentoEditarComponent implements OnInit {
  departamentoForm: FormGroup;
  departamento: Departamento = new Departamento();

  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.criarFormulario();
  }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departamento = await this.departamentoService.get(id);

    this.departamentoForm.setValue({
      nome: this.departamento.nome
    });
  }

  criarFormulario() {
    this.departamentoForm = this.fb.group({
      nome: [this.departamento.nome, [Validators.required, Validators.maxLength(200)]]
    });
  }

  enviar() {
    if (this.departamentoForm.invalid) {
      return;
    }

    const departamento = this.fromForm2Entity(this.departamentoForm.value);
    this.departamentoService.update(this.departamento.id, departamento).then(() => {
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
