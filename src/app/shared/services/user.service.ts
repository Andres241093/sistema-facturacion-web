import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';
import { STATUS, USERTYPE } from 'src/app/shared/constants/user.constant';
import { map } from 'rxjs/operators';

class UserList{
	total: number;
	page: number;
	per_page: number;
	data: Array<User> = [];
}

@Injectable({
	providedIn: 'root'
})
export class UserService {

	url: string;

	constructor(public http: HttpClient) { 
		this.url = environment.url;
	}

	index(params = {}): Observable<any>
	{
		const query =  { params: new HttpParams({fromObject: params}) }
		return this.http.get(this.url+'/admin', query).pipe(
			map(res => {

				let user_list = new UserList();
				user_list.total = res['total'];
				user_list.page = res['page'];
				user_list.per_page = res['per_page'];
				console.log(res['data']);
				for(let item in res['data']){
					
					let user = new User();

					user.id = res['data'][item]['id'];
					user.status = STATUS[res['data'][item]['status']];
					user.email = res['data'][item]['email'];
					user.gender = res['data'][item]['gender'];
					user.name = res['data'][item]['name'];
					user.phone = res['data'][item]['phone'];
					user.surname = res['data'][item]['surname'];
					user.type = USERTYPE[res['data'][item]['type']];

					user_list.data.push(user);
					
				}
				
				return user_list;
			})
			);
	}
}
