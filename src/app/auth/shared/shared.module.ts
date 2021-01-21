import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
//MATERIAL MODULES
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//REACTIVE FORMS MODULES
import { ReactiveFormsModule } from '@angular/forms';

const modules: Array<any> =[
	AppSharedModule,
	ReactiveFormsModule,
	MatFormFieldModule,
	MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [modules]
})
export class SharedModule { }
