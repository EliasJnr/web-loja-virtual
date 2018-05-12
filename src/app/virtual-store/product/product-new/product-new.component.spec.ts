import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewComponent } from './product-new.component';
import { VirtualStoreModule } from 'app/virtual-store/virtual-store.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MdDialogRef } from '@angular/material';
import { DebugElement } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { By } from '@angular/platform-browser';
import { Utils } from 'app/util/utils';
import { MdDialogRefMock } from 'app/util/md-dialog-ref.mock';

describe('ProductNewComponent', () => {
  let component: ProductNewComponent;
  let fixture: ComponentFixture<ProductNewComponent>;
  const deAll: Map<string, DebugElement> = new Map();
  let fn: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        VirtualStoreModule
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fn = component.formNames;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form.valid true se os dados minimos forem preenchidos', (done) => {
    updateHTML();
    component.ngOnInit();
    fixture.detectChanges();
    updateFormValue(formValueConst);
    updateInputs();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true, 'form.valid');
      expect(component.form.get(fn.codigo).value).toEqual('cod123');
      expect(component.form.get(fn.nome).value).toEqual('Produto test');
      expect(component.form.get(fn.valorCompra).value).toEqual(100.5);
      expect(component.form.get(fn.valorVenda).value).toEqual(150.7);
      done();
    });
  });

  it('form.valid false se os dados minimos NÃO forem preenchidos', (done) => {
    const values = Utils.createCopy(formValueConst);
    updateHTML();
    component.ngOnInit();
    fixture.detectChanges();
    values.codigo = '';
    updateFormValue(values);
    updateInputs();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(false, 'form.valid');
      expect(component.form.get(fn.codigo).value).toEqual('', 'formCodigo.value');
      expect(component.form.get(fn.codigo).valid).toEqual(false, 'formCodigo.invalid');
      expect(component.formErrors[fn.codigo]).toEqual('Campo obrigatório', 'formErrors.codigo');
      expect(component.form.get(fn.nome).value).toEqual('Produto test');
      expect(component.form.get(fn.valorCompra).value).toEqual(100.5);
      expect(component.form.get(fn.valorVenda).value).toEqual(150.7);
      done();
    });
  });

  it('form.valid true after formInvalid', (done) => {
    const values = Utils.createCopy(formValueConst);
    updateHTML();
    component.ngOnInit();
    fixture.detectChanges();
    values.codigo = '';
    updateFormValue(values);
    updateInputs();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(false, 'form.valid');
      expect(component.form.get(fn.codigo).value).toEqual('', 'formCodigo.value');
      expect(component.form.get(fn.codigo).valid).toEqual(false, 'formCodigo.invalid');
      expect(component.formErrors[fn.codigo]).toEqual('Campo obrigatório', 'formErrors.codigo');
      expect(component.form.get(fn.nome).value).toEqual('Produto test');
      expect(component.form.get(fn.valorCompra).value).toEqual(100.5);
      expect(component.form.get(fn.valorVenda).value).toEqual(150.7);
      values.codigo = '1234';
      updateFormValue(values);
      updateInputs();
      fixture.whenRenderingDone().then(() => {
        fixture.detectChanges();
        expect(component.form.valid).toBe(true, 'form.valid after');
        expect(component.form.get(fn.codigo).value).toEqual('1234', 'formCodigo.value after');
        expect(component.form.get(fn.codigo).valid).toEqual(true, 'formCodigo.valid after');
        expect(component.formErrors[fn.codigo]).toEqual('', 'formErrors.codigo after');
        expect(component.form.get(fn.nome).value).toEqual('Produto test', 'after');
        expect(component.form.get(fn.valorCompra).value).toEqual(100.5);
        expect(component.form.get(fn.valorVenda).value).toEqual(150.7);
        done();
      });
    });
  });

  it('formErros com Campo obrigatório formValue == ""', (done) => {
    const values = Utils.createCopy(formValueConst);
    updateHTML();
    component.ngOnInit();
    fixture.detectChanges();
    values.codigo = '';
    values.nome = '';
    values.valorCompra = '';
    values.valorVenda = '';
    updateFormValue(values);
    updateInputs();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(false, 'form.valid');
      expect(component.formErrors[fn.codigo]).toEqual('Campo obrigatório', 'formErrors.codigo');
      expect(component.formErrors[fn.nome]).toEqual('Campo obrigatório', 'formErrors.nome');
      expect(component.formErrors[fn.valorVenda]).toEqual('Campo obrigatório', 'formErrors.valorVenda');
      expect(component.formErrors[fn.valorCompra]).toEqual('Campo obrigatório', 'formErrors.valorCompra');
      done();
    });
  });

  function updateHTML() {
    fixture.detectChanges();
    for ( const i of Object.keys(ids) ) {
      deAll.set(ids[i], fixture.debugElement.query(By.css(ids[i])));
    }
  }

  function updateInputs() {
    component.form.get(fn.codigo).markAsTouched();
    component.form.get(fn.nome).markAsTouched();
    component.form.get(fn.descricao).markAsTouched();
    component.form.get(fn.urlImagem).markAsTouched();
    component.form.get(fn.valorCompra).markAsTouched();
    component.form.get(fn.valorVenda).markAsTouched();

    for (const i of Object.keys(ids)) {
      if (i.startsWith('form') && !isNullOrUndefined(deAll.get(ids[i]))) {
        deAll.get(ids[i]).nativeElement.dispatchEvent(new Event('input'));
        deAll.get(ids[i]).nativeElement.dispatchEvent(new Event('keypress'));
        deAll.get(ids[i]).nativeElement.dispatchEvent(new Event('focusout'));
      }
    }
    fixture.detectChanges();
  }

  function updateFormValue(formValue: any) {
    component.form.get(fn.valorCompra).setValue(formValue.valorCompra);
    component.form.get(fn.valorVenda).setValue(formValue.valorVenda);

    deAll.get(ids.formCodigo) ? deAll.get(ids.formCodigo).nativeElement.value = formValue.codigo : fail('update codigo');
    deAll.get(ids.formNome) ? deAll.get(ids.formNome).nativeElement.value = formValue.nome : fail('update nome');
    deAll.get(ids.formuUrlmagem) ? deAll.get(ids.formuUrlmagem).nativeElement.value = formValue.urlImagem : fail('update valorCompra');
    deAll.get(ids.formValorCompra) ? deAll.get(ids.formValorCompra).nativeElement.value = formValue.valorCompra : fail('update valorCompra');
    deAll.get(ids.formValorVenda) ? deAll.get(ids.formValorVenda).nativeElement.value = formValue.valorVenda : fail('update valorVenda');
  }
});

const ids = {
  formCodigo: '#codigo',
  formNome: '#nome',
  formDescricao: '#descricao',
  formuUrlmagem: '#urlImagem',
  formValorCompra: '#valorCompra',
  formValorVenda: '#valorVenda',
  btnCancelar: 'btnCancelar',
  btnSalvar: 'btnSalvar'
};

const formValueConst = {
  codigo: 'cod123',
  nome: 'Produto test',
  descricao: '',
  urlImagem: 'http://www.teste.com',
  valorCompra: 100.5,
  valorVenda: 150.7
};
