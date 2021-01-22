import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		loadChildren: () => import('./bill/bill.module').then(m => m.BillModule),
		path: 'bills'
	},
	{
		loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
		path: 'categories'
	},
	{
		loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
		path: 'clients'
	},
	{
		loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
		path: 'products'
	},
	{
		loadChildren: () => import('./user/user.module').then(m => m.UserModule),
		path: 'users'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
