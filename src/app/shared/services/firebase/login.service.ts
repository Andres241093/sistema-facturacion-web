import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
//import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string){
  	try{
	  	const result = await this.afAuth.signInWithEmailAndPassword(email,password);
	  	return result;
  	}catch(err){
  		console.log(err);
  	}
  }
  async register(email: string, password: string){
  	try{
	  	const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
	  	return result;
  	}catch(err){
  		console.log(err);
  	}
  }
  async logout(){
  	try{
  		await this.afAuth.signOut();
  	}catch(err){
  		console.log(err);
  	}
  }
  getUser(): Observable<any>{
  		return this.afAuth.user;
  		//return this.afAuth.authState.pipe(first()).toPromise();
  }
}
