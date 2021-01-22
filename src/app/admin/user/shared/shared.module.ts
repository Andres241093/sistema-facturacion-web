import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
//MATERIAL MODULES
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

//REACTIVE FORMS MODULES
import { ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';
import { UserShowModalComponent } from './user-show-modal/user-show-modal.component';
import { UserDeleteModalComponent } from './user-delete-modal/user-delete-modal.component';

const modules: Array<any> =[
	AppSharedModule,
	ReactiveFormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatPaginatorModule,
	MatDialogModule
];

const components: Array<any> =[
	UserCardComponent, 
	UserShowModalComponent,
	UserDeleteModalComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules,components]
})
export class SharedModule { }
