import { Component, OnInit } from '@angular/core';
import { storeRoutes } from 'app/store-routes.const';
import { MdDialogService } from 'app/util/md-dialog.service';
import { ProductNewComponent } from 'app/virtual-store/product/product-new/product-new.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public routes = storeRoutes;

  constructor(
    private dialog: MdDialogService
  ) { }

  ngOnInit() {
  }

  public newProduct(): void {
    this.dialog.newProduct();
  }
}
