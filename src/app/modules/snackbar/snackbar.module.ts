import { NgModule } from '@angular/core';
import { MdSnackBar, MdSnackBarContainer, MdSnackBarModule } from '@angular/material';
import { SnackbarService } from './snackbar.service';
import { SnackbarComponent } from './snackbar.component';
import { CommonModule } from '@angular/common';
import { TipoMensagemEnum } from './tipo-mensagem.enum';
export { TipoMensagemEnum } from './tipo-mensagem.enum';

@NgModule({
  imports: [ CommonModule, MdSnackBarModule ],
  declarations: [
    SnackbarComponent
  ],
  exports: [
    SnackbarComponent
  ],
  providers: [ SnackbarService, MdSnackBar ],
  entryComponents: [ SnackbarComponent, MdSnackBarContainer ]
})

export class SnackbarModule { }
