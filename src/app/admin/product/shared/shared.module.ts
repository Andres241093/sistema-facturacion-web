import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeleteModalComponent } from './product-delete-modal/product-delete-modal.component';
import { ProductCreateModalComponent } from './product-create-modal/product-create-modal.component';
import { ProductUpdateModalComponent } from './product-update-modal/product-update-modal.component';



@NgModule({
  declarations: [ProductDeleteModalComponent, ProductCreateModalComponent, ProductUpdateModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
