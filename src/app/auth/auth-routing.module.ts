import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
	{
		component: LoginComponent,
		path: 'login'
	},
	{
		component: RecoveryPassComponent,
		path: 'recovery-pass'
	},
	{
		component: ResetPassComponent,
		path: 'reset-pass'
	},
	{
		component: SignUpComponent,
		path: 'sign-up'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
