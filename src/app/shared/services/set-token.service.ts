import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SetTokenService implements HttpInterceptor {

	constructor() { }


	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

		const tokenized = request.clone({
			setHeaders: {
				Authorization: 'Bearer '+ localStorage.getItem('auth-token')
			}
		}); 
		//console.log(request)
		return next.handle(tokenized);
	}

}
