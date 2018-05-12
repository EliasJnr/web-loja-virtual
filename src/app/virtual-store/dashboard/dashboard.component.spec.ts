import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { VirtualStoreModule } from 'app/virtual-store/virtual-store.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MdDialogRefMock } from 'app/util/md-dialog-ref.mock';
import { MdDialogService } from 'app/util/md-dialog.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        VirtualStoreModule
      ],
      providers: [
        { provide: MdDialogService, useClass: MdDialogRefMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
