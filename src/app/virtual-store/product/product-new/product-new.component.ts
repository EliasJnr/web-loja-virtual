import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidator } from 'app/modules/form-validator/form-validator.component';
import { isNullOrUndefined } from 'util';
import { MdDialogRef } from '@angular/material';
import { ProductcontrollerApi } from 'app/api/api/ProductcontrollerApi';
import { Router } from '@angular/router';
import { storeRoutes } from 'app/store-routes.const';
import { ProductService } from 'app/virtual-store/product.service';
import { CreatePageConf } from 'app/component/pagination/models/page-conf';
import { Subscription } from 'rxjs/Subscription';
import { ProductModel } from 'app/models/product.model';
import { messages, messageType } from 'app/util/response-messages.const';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.sass']
})
export class ProductNewComponent implements OnInit, OnDestroy  {

  public form: FormGroup;
  public product = new ProductModel();

  private formSub: Subscription;
  public message = '';
  public tipoMsg = '';

  public formNames = {
    id: 'id',
    codigo: 'codigo',
    estoque: 'estoque',
    nome: 'nome',
    descricao: 'descricao',
    urlImagem: 'urlImagem',
    valorCompra: 'valorCompra',
    valorVenda: 'valorVenda',
  };

  public formErrors = {};


  constructor(
    private fb: FormBuilder,
    private api: ProductcontrollerApi,
    private service: ProductService,
    public dialogRef: MdDialogRef<ProductNewComponent>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
    this.service.clearData();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [null],
      codigo: ['', FormValidator.required],
      estoque: [0],
      nome: ['', FormValidator.required],
      descricao: [''],
      urlImagem: ['', FormValidator.url],
      valorCompra: ['', FormValidator.required],
      valorVenda: ['', FormValidator.required],
    });
    this.formSub = this.service.data$.subscribe(data => {
      if (data)
        this.form.patchValue(data);
    });
  }

  public create(): void {
    if (!this.form.get(this.formNames.id).value) {
      this.api.createUsingPOST(this.form.value).subscribe(() => {
        this.handleSuccess();
      }, err => this.handleError(err));
    } else
      this.update();
  }

  public update(): void {
    this.product = this.form.value;
    this.product.id = Number(this.form.get(this.formNames.id).value);
    this.api.updateUsingPUT(this.form.value).subscribe(() => {
      this.handleSuccess();
    }, err => this.handleError(err));
  }

  private handleSuccess(): void {
    this.service.findAll(CreatePageConf('nome')).then(() => {
      this.closeDialog();
      this.service.showMessage(messages.salvoComSucesso, messageType.sucesso);
      this.router.navigate(['/' + storeRoutes.productList]);
    });
  }

  private handleError(err: any): void {
    try {
      const error = err.json();
      if (error.message) {
        this.showMessage(error.message, messageType.erro);
        return;
      }
      if (error.erros) {
        let auxMsg = '';
        for (const i of Object.keys(error.erros)) {
          auxMsg = error.erros[i];
        }
        this.showMessage(auxMsg, messageType.erro);
      }
    } catch (e) {
      this.showMessage(messages.serverError, messageType.erro);
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public validateField(field: string): void {
    if (isNullOrUndefined(this.form.get(field)))
      throw new Error('Nenhum campo para validação foi enviado, ex.: validateField("field")');
    const control = this.form.get(field);
    if (control === this.form.get(field))
      if (control && control.touched && !control.valid) {
        for (const key in control.errors) {
          if (typeof control.errors[key] === 'object') {
            if (control.errors[key].message) {
              this.formErrors[field] = control.errors[key].message;
            }
          } else {
            this.formErrors[field] =  'Mensagem não encontrada.';
          }
        }
      } else if (control.valid) {
        this.formErrors[field] = '';
      }
  }

  public showMessage(msg: string, msgType: string): void {
    this.tipoMsg = msgType;
    this.message = msg;
    setTimeout(() => {
      this.tipoMsg = '';
      this.message = '';
    }, 3500);
  }
}
