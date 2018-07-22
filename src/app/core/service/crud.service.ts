import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
// Operators
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CrudService<T> {
    protected headers: Headers;
    protected rootUrl: string = environment.baseUrl;
    protected path = '';

    constructor(protected http: Http) {
    }

    public fetch(options: RequestOptionsArgs = {}): Promise<T[]> {
        options.headers = Object.assign({}, options.headers, this.headers);

        return this.http.get(this.getUrl(), options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public get(id: number, options: RequestOptionsArgs = {}): Promise<T> {
        options.headers = Object.assign({}, options.headers, this.headers);

        return this.http.get(this.getUrl() + `/${id}`, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public save(body: T, options: RequestOptionsArgs = {}): Promise<T> {
        options.headers = Object.assign({}, options.headers, this.headers);

        return this.http.post(this.getUrl(), body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public update(id: number, body: T, options: RequestOptionsArgs = {}): Promise<T> {
        options.headers = Object.assign({}, options.headers, this.headers);

        return this.http.put(this.getUrl() + `/${id}`, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public delete(id: number, options: RequestOptionsArgs = {}): Promise<boolean> {
        options.headers = Object.assign({}, options.headers, this.headers);

        return this.http.delete(this.getUrl() + `/${id}`, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    protected getUrl() {
        return this.rootUrl + this.path;
    }

    protected extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    protected handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
