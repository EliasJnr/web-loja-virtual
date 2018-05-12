import { NgModule } from '@angular/core';
import { MdDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDialogComponent } from 'app/modules/custom-dialog/custom-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomDialogComponent
  ],
  exports: [
    CustomDialogComponent
  ],
  entryComponents: [
    CustomDialogComponent
  ]
})

export class CustomDialogModule {}
