import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { ContainerModule } from 'app/container/container.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MdDialogRef } from '@angular/material';
import { MdDialogRefMock } from 'app/util/md-dialog-ref.mock';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ContainerModule
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
