import { inject, TestBed } from '@angular/core/testing';
import { ApiProductModule } from 'app/api/api-product.module';
import { MdDialogService } from 'app/util/md-dialog.service';
import { MdDialogModule } from '@angular/material';

describe('MdDialogService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiProductModule,
        MdDialogModule
      ],
      providers: [
        MdDialogService
      ]
    });
  });

  it('should be created', inject([MdDialogService], (service: MdDialogService) => {
    expect(service).toBeTruthy();
  }));
});
