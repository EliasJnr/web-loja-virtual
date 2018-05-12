import { NgModule } from '@angular/core';
import { MatTableModule, MatInputModule, MdButtonModule, MdDialogModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MdButtonModule,
    MdDialogModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MdButtonModule,
    MdDialogModule
  ]
})

export class AppMaterialModule {}
