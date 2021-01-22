import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';

const modules: Array<any> =[
	AppSharedModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [modules]
})
export class SharedModule { }
