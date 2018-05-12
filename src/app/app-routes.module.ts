import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { ProductListComponent } from 'app/virtual-store/product/product-list/product-list.component';
import { DashboardComponent } from 'app/virtual-store/dashboard/dashboard.component';
import { ProductNewComponent } from 'app/virtual-store/product/product-new/product-new.component';
import { storeRoutes } from 'app/store-routes.const';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: storeRoutes.home,
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: storeRoutes.productList,
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: storeRoutes.productNew,
    component: ProductNewComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AppComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
/**
 * @module AppRoutesModule
 * @desc Modulo que importa os componentes de angular material
 */
export class AppRoutesModule { }
