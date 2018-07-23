import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { CrudService } from './crud.service';
import { Funcionario } from '../models/funcionario.model';
import { Movimentacao } from '../models/movimentacao.model';

@Injectable()
export class FuncionarioService extends CrudService<Funcionario> {
  path = '/funcionarios';

  constructor(protected http: Http) {
    super(http);
  }

  public getMovimentacoes(id: number, options: RequestOptionsArgs = {}): Promise<Movimentacao[]> {
    options.headers = Object.assign({}, options.headers, this.headers);

    return this.http.get(this.getUrl() + `/${id}/movimentacoes`, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
}
}
