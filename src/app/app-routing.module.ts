import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
		path: 'auth'
	},
	{
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
		path: 'admin'
	},
	{
		loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
		path: 'employees'
	},
	{ path:'**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
