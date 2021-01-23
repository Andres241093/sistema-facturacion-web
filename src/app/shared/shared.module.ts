import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
//REACTIVE FORMS MODULE
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyHeaderComponent } from './body-header/body-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const modules: Array<any> =[
	MaterialModule,
  FlexLayoutModule,
  RouterModule,
  ReactiveFormsModule
];

const components: Array<any> =[
  FooterComponent, 
  HeaderComponent, 
  BodyHeaderComponent,
  SidenavComponent,
  SearchBarComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
  	modules,
  	components
  ]
})
export class SharedModule { }
