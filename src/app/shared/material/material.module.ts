import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

const modules: Array<any> =[
	MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ]
})
export class MaterialModule { }
