import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from 'app/app-routes.module';
import { ContainerModule } from 'app/container/container.module';
import { AppMaterialModule } from 'app/modules/app-material.module';
import { VirtualStoreModule } from 'app/virtual-store/virtual-store.module';
import { PaginationModule } from 'app/component/pagination/pagination.module';
import { SnackbarModule } from 'app/modules/snackbar/snackbar.module';
import { CustomDialogModule } from 'app/modules/custom-dialog/custom-dialog.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutesModule,
    ContainerModule,
    AppMaterialModule,
    VirtualStoreModule,
    PaginationModule,
    SnackbarModule,
    CurrencyMaskModule,
    CustomDialogModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
