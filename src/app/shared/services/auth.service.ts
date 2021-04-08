import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';
import { USERTYPE, STATUS } from 'src/app/shared/constants/user.constant';
//import { GENDER } from 'src/app/shared/constants/user/gender.constant';
//import { USERTYPE } from 'src/app/shared/constants/user/user-type.constant';
import { concatMap, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private static readonly TOKEN_KEY = 'auth-token';
	private userBehaviorSubject: BehaviorSubject<any>;

	constructor(
		public http: HttpClient,
		) {
		this.userBehaviorSubject = new BehaviorSubject<any>(null);
	}

	setAuthorizationToken(token: string): void {
		localStorage.setItem(AuthService.TOKEN_KEY, token);
	}
	public getAuthorizationToken() {
		return !! localStorage.getItem('auth-token');
	}
	setUser(user: any): void {
		this.userBehaviorSubject.next(user);
	}
	getUser(): Observable<any> {
		return this.userBehaviorSubject.asObservable();
	}
	logout(): void{
		localStorage.removeItem(AuthService.TOKEN_KEY);
		this.setUser(null);
	}
	login(credential: Credential){
		const login = this.http.post(environment.url+'/auth/login', credential)
		.pipe(
			tap(response => this.setAuthorizationToken(response['token'])),
			concatMap((response) => this.authenticate()),
			);
		return login;
	}
	activateAccount(token: any): Observable<any>
	{
		return this.http.get(environment.url+'/auth/signup/activate/'+token);
	}
	recoveryPassword(email: any): Observable<any>
	{
		return this.http.post(environment.url+'/password/create',email);
	}
	recoveryPasswordCheckToken(token: any): Observable<any>
	{
		return this.http.get(environment.url+'/password/find/'+token);
	}
	resetPassword(newPass: any): Observable<any>
	{
		return this.http.post(environment.url+'/password/reset',newPass);
	}

	authenticate(){
		const token = this.getAuthorizationToken();
		if (this.getAuthorizationToken() == false) {
			const authenticateObservable = new Observable<User>((observer) => {
				observer.error('Token not available');
			});
			return authenticateObservable;
		}

		return this.http.get<User>(environment.url + '/auth/authenticate').pipe(
			map( response => {
				const user: User = new User();

				user.id = response['id'];
				user.name = response['name'];
				user.surname = response['surname'];
				user.email = response['email'];
				user.phone = response['phone'];
				user.type = USERTYPE[response['type']];
				user.gender = response['gender'];
				user.status = STATUS[response['status']];


				this.setUser(user);

				return user;
			}),
			catchError((err, caugth) => {
				this.logout();
				throw err;
			})
			);
	}

}

export interface Credential{
	email: string;
	password: string;
}