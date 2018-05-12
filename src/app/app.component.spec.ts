import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ContainerModule } from 'app/container/container.module';
import { MdDialogRef } from '@angular/material';
import { MdDialogRefMock } from 'app/util/md-dialog-ref.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ContainerModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
