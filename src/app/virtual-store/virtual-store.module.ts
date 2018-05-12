import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AppMaterialModule } from 'app/modules/app-material.module';
import { PaginationModule } from 'app/component/pagination/pagination.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductService } from 'app/virtual-store/product.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidatorModule } from 'app/modules/form-validator/form-validator.module';
import { SnackbarModule } from 'app/modules/snackbar/snackbar.module';
import { CustomDialogModule } from 'app/modules/custom-dialog/custom-dialog.module';
import { CustomTableModule } from 'app/component/custom-table/custom-table.module';
import { ApiProductModule } from 'app/api/api-product.module';
import { MdDialogService } from 'app/util/md-dialog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    PaginationModule,
    RouterModule,
    CurrencyMaskModule,
    FormValidatorModule,
    SnackbarModule,
    CustomDialogModule,
    PaginationModule,
    CustomTableModule,
    ApiProductModule
  ],
  declarations: [
    ProductListComponent,
    DashboardComponent,
    ProductNewComponent
  ],
  exports: [
    ProductListComponent,
    DashboardComponent,
    ProductNewComponent
  ],
  entryComponents: [
    ProductNewComponent
  ],
  providers: [
    ProductService,
    MdDialogService
  ]
})

export class VirtualStoreModule {}
