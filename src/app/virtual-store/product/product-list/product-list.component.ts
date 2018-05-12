import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { PageModel } from 'app/component/pagination/models/page.model';
import { ProductcontrollerApi } from 'app/api/api/ProductcontrollerApi';
import { CreatePageConf, PageConf } from 'app/component/pagination/models/page-conf';
import { ProductModel } from 'app/models/product.model';
import { ProductService } from 'app/virtual-store/product.service';
import { SnackbarService } from 'app/modules/snackbar/snackbar.service';
import { MdDialogService } from 'app/util/md-dialog.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})

export class ProductListComponent implements OnInit, OnDestroy {

  @Output() data: any;
  pageData = new PageModel<ProductModel>();
  selectedProduct: ProductModel;
  pageConf: PageConf;
  public message: any;
  public tipoMsg = '';
  private typeSub: Subscription;
  private pageDataSub: Subscription;

  private columnNames = ['Código', 'Imagem', 'Produto', 'Descrição', 'Estoque', 'Valor venda'];
  private rowNames = ['codigo', 'urlImagem', 'nome', 'descricao', 'estoque', 'valorVenda'];
  private rows = [
  ];

  constructor(
    private api: ProductcontrollerApi,
    private dialog: MdDialogService,
    private service: ProductService
  ) {
    this.pageConf = CreatePageConf('nome');
    this.pageConf.count = 5;
  }

  ngOnInit() {
    this.findAll();
    this.pageDataSub = this.service.pageData$.subscribe(res => {
      this.pageData = res;
      if (res.content)
        this.rows = res.content;
    });
    this.message = this.service.message$;
    this.typeSub = this.service.messageType$.subscribe(data => this.tipoMsg = data);
  }

  ngOnDestroy(): void {
    console.log('saiu da lista');
    this.pageDataSub.unsubscribe();
    this.typeSub.unsubscribe();
  }

  public findAll(): void {
    this.service.findAll(this.pageConf);
  }

  public handleChoice(pageNumber: number) {
    this.pageConf.page = pageNumber;
    this.findAll();
  }

  public newProduct(): void {
    this.dialog.newProduct();
  }

  public handleEdit(object: ProductModel) {
    this.service.saveData(object);
    this.dialog.newProduct();
  }

  public handleRemove(object: ProductModel) {
    this.api.deleteUsingDELETEWithHttpInfo(object.id).subscribe(() => {
      this.pageConf.page = 0;
      this.service.findAll(this.pageConf);
    });
  }

  public handleSort(object: any) {
    if (object && object.sort && object.sort.toString() !== 'urlImagem') {
      this.pageConf.sort = object.sort;
      if (object.order !== this.pageConf.order) {
        if (this.pageConf.order === 'ASC')
          this.pageConf.order = 'DESC';
        else
          this.pageConf.order = 'ASC';
        this.service.findAll(this.pageConf);
        console.log(this.pageConf);
      }
    }
  }

}
