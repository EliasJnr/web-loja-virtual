import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { ProductNewComponent } from 'app/virtual-store/product/product-new/product-new.component';

@Injectable()
export class MdDialogService {

  constructor(
    public dialog: MdDialog
  ) {}

  public newProduct(): void {
    this.dialog.open(ProductNewComponent, {
      width: '500px'
    });
  }
}
