import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
//MATERIAL MODULES
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
//Translation of paginator
import { getDutchPaginatorIntl } from 'src/app/shared/material/translate-paginator';

import { UserCardComponent } from './user-card/user-card.component';
import { UserShowModalComponent } from './user-show-modal/user-show-modal.component';
import { UserDeleteModalComponent } from './user-delete-modal/user-delete-modal.component';

const modules: Array<any> =[
	AppSharedModule,
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
  exports: [modules,components],
  providers: [
    { 
      provide: MatPaginatorIntl, 
      useValue: getDutchPaginatorIntl() 
    }
  ]
})
export class SharedModule { }
