import { NgModule } from '@angular/core';

import { environment } from 'environments/environment';
import { BASE_PATH } from './variables';
import { APIS } from 'app/api/api/api';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin },
    APIS
  ]
})

export class ApiProductModule { }
