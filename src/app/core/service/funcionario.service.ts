import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from './crud.service';
import { Funcionario } from '../models/funcionario.model';

@Injectable()
export class FuncionarioService extends CrudService<Funcionario> {
  path = '/funcionarios';

  constructor(protected http: Http) {
    super(http);
  }
}
