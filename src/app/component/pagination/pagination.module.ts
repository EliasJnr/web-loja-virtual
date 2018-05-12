import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from 'app/component/pagination/pagination.component';
import { MdPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdPaginatorModule
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent,
    MdPaginatorModule
  ]
})

export class PaginationModule {}
