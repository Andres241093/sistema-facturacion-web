import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const modules: Array<any> =[
	MaterialModule
];

const components: Array<any> =[

];

@NgModule({
  declarations: [components, FooterComponent, HeaderComponent, SidebarComponent],
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
