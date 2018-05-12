import { Injectable } from '@angular/core';
import { CreatePageConf, PageConf } from 'app/component/pagination/models/page-conf';
import { PageModel } from 'app/component/pagination/models/page.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductModel } from 'app/models/product.model';
import { ProductcontrollerApi } from 'app/api/api/ProductcontrollerApi';
import { Router } from '@angular/router';
import { storeRoutes } from 'app/store-routes.const';

@Injectable()
export class ProductService {

  private pageData = new BehaviorSubject<PageModel<ProductModel>>(new PageModel<ProductModel>());
  private message = new BehaviorSubject<string>('');
  private messageType = new BehaviorSubject<string>('');

  public pageData$ = this.pageData.asObservable();
  public messageType$ = this.messageType.asObservable();
  public message$ = this.message.asObservable();

  private data = new BehaviorSubject<any>(null);
  public data$ = this.data.asObservable();

  constructor(
    private api: ProductcontrollerApi,
    private router: Router
  ) {}

  public findAll(pageConf: PageConf): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.getAllPaginatedUsingGET(pageConf.page, pageConf.count, pageConf.order, pageConf.sort)
        .subscribe(data => {
          resolve(data);
          this.saveProductsPage(<PageModel<ProductModel>> data);
          this.clearMessage();
        }, err => {
          reject(err);
        });
    });
  }

  public searchByNomeOrDescricao(value: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const pageConf = CreatePageConf('nome');
      this.api.searchByNomeOrDescricaoPaginatedUsingGET(value, pageConf.page, pageConf.count, pageConf.order, pageConf.sort)
        .subscribe(data => {
          resolve(data);
          this.saveProductsPage(<PageModel<ProductModel>> data);
          this.router.navigate(['/' + storeRoutes.productList]);
        }, err => {
          reject(err);
        });
    });
  }

  public saveProductsPage(data: PageModel<ProductModel>): void {
    this.pageData.next(data);
  }

  public clearProductsPage(): void {
    this.pageData.next(null);
  }

  public saveData(data: any): void {
    this.data.next(data);
  }

  public clearData(): void {
    this.data.next(null);
  }

  public getData(): void {
    this.data.getValue();
  }

  public showMessage(msg: string, msgType: string): void {
    this.messageType.next(msgType);
    this.message.next(msg);
    setTimeout(() => {
      this.message.next('');
      this.messageType.next('');
    }, 5000);
  }

  public clearMessage(): void {
    this.messageType.next('');
    this.message.next('');
  }
}
