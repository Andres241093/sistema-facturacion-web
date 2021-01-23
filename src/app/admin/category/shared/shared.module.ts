import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDeleteModalComponent } from './category-delete-modal/category-delete-modal.component';
import { CategoryCreateModalComponent } from './category-create-modal/category-create-modal.component';
import { CategoryUpdateModalComponent } from './category-update-modal/category-update-modal.component';



@NgModule({
  declarations: [CategoryDeleteModalComponent, CategoryCreateModalComponent, CategoryUpdateModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
