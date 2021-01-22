import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';

const modules: Array<any> =[
	CommonModule,
    AdminRoutingModule, 
	SharedModule
];

@NgModule({
  declarations: [],
  imports: [
    modules
  ]
})
export class AdminModule { }
