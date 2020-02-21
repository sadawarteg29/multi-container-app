import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions,ResponseContentType} from '@angular/http';
// import { HttpClientModule }    from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable, throwError} from 'rxjs';
import {environment1} from '../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {

	constructor( private httpClient:HttpClient) { }
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}

	addUser(data): Observable<any> {
		return this.httpClient.post<any>(environment1.endPoint + 'addUser', JSON.stringify(data), this.httpOptions)
		.pipe(
			retry(1),)
	} 
	getAllUser(): Observable<any> {
		return this.httpClient.get<any>(environment1.endPoint+"getAllUser")
		.pipe(
			retry(1),)
	}
}