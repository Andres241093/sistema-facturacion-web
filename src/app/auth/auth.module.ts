import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const modules: Array<any> =[
	CommonModule,
    AuthRoutingModule,
	SharedModule
];

const components: Array<any> =[
	LoginComponent, 
	SignUpComponent, 
	RecoveryPassComponent, 
	ResetPassComponent
];

@NgModule({
  declarations: [components],
  imports: [
    modules
  ]
})
export class AuthModule { }
