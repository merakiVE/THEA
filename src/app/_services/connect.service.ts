import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Connect } from '../_models/connect';

@Injectable()
export class ConnectService {
    
    headers: Headers = new Headers;

    constructor(private http:Http) {

        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    getTables(connect: Connect): Observable<any[]> {

        return this.http.post(environment.apiURL+'/connect', connect, {
            headers: this.headers
        }).map(response => response.json());

    }
}