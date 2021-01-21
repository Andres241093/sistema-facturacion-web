import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const modules: Array<any> =[
	MaterialModule,
  FlexLayoutModule,
  RouterModule
];

const components: Array<any> =[
  FooterComponent, 
  HeaderComponent, 
  SidebarComponent
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
