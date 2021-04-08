import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';	

@Injectable({
	providedIn: 'root'
})
export class RoleGuard implements CanActivate {

	user: any;

	constructor(
		private authService: AuthService,
		private alertService: AlertService,
		private router: Router
		){
		this.authService.getUser().subscribe(res=>{
			this.user = res;
		});
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if(this.user)
		{
			if(route.data['role'].includes(this.user.type)){
				return true;
			}else{
				this.alertService.show('No tiene permisos para acceder a esta ruta','403 OK',6000);
				this.router.navigate(['/']);
				return false;
			}

		}else{
			this.alertService.show('Debe iniciar sesión','OK',6000);
			this.router.navigate(['/']);
			return false;
		}
	}

}