import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		loadChildren: () => import('./bill/bill.module').then(m => m.BillModule),
		path: 'bills'
	},
	{
		loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
		path: 'products'
	},
	{ path:'**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
