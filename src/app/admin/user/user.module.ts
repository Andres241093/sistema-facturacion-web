import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './shared/shared.module';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const modules: Array<any> =[
	SharedModule,
	UserRoutingModule
];

const components: Array<any> =[
	IndexComponent
];

@NgModule({
  declarations: [components, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    modules
  ]
})
export class UserModule { }
