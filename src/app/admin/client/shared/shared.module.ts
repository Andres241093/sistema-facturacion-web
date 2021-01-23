import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDeleteModalComponent } from './client-delete-modal/client-delete-modal.component';
import { ClientCreateModalComponent } from './client-create-modal/client-create-modal.component';
import { ClientUpdateModalComponent } from './client-update-modal/client-update-modal.component';



@NgModule({
  declarations: [ClientDeleteModalComponent, ClientCreateModalComponent, ClientUpdateModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
