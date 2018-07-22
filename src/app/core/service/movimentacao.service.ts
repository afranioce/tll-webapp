import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from './crud.service';
import { Movimentacao } from '../models/movimentacao.model';

@Injectable()
export class MovimentacaoService extends CrudService<Movimentacao> {
  path = '/movimentacoes';

  constructor(protected http: Http) {
    super(http);
  }
}
