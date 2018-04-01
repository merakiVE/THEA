import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Api } from '../_models/api';

@Injectable()
export class BuildService {
    
    headers: Headers = new Headers;

    constructor(private http:Http) {

        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    buildApi(api: Api): Observable<any[]> {

        return this.http.post(environment.apiURL+'/build', api, {
            headers: this.headers
        }).map(response => response.json());

    }
}