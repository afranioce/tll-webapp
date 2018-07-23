import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento.model';
import { CrudService } from './crud.service';
import { Http } from '@angular/http';

@Injectable()
export class DepartamentoService extends CrudService<Departamento> {
  path = '/departamentos';

  constructor(protected http: Http) {
    super(http);
  }
}
