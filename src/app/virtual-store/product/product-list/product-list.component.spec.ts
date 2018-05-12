import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { VirtualStoreModule } from 'app/virtual-store/virtual-store.module';
import { RouterTestingModule } from '@angular/router/testing';
import { el } from '@angular/platform-browser/testing/src/browser_util';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Utils } from 'app/util/utils';
import { PageModel } from 'app/component/pagination/models/page.model';
import { ProductModel } from 'app/models/product.model';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let deAll: Map<string, DebugElement> = new Map();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        VirtualStoreModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css(ids.main));
    el = de.nativeElement;
    fixture.detectChanges();
    deAll = Utils.updateHTML(ids, fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should not show table if pageData.content is null', () => {
    component.pageData = new PageModel<ProductModel>();
    fixture.detectChanges();
    component.ngOnInit();
    expect(deAll.get(ids.main) ? deAll.get(ids.main) : null).toContain('produto', 'sem produtos');
  });
});

const ids = {
  main: '#productList'
};
