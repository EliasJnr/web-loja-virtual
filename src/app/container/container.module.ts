import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'app/container/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CustomDialogModule } from 'app/modules/custom-dialog/custom-dialog.module';
import { MdDialogService } from 'app/util/md-dialog.service';
import { ProductService } from 'app/virtual-store/product.service';
import { ApiProductModule } from 'app/api/api-product.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    CustomDialogModule,
    ApiProductModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  providers: [
    MdDialogService,
    ProductService
  ]
})

export class ContainerModule {}
