import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: [
    './custom-dialog.component.sass'
  ]
})

export class CustomDialogComponent<T> {

  constructor(
    public dialogRef: MdDialogRef<T>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
