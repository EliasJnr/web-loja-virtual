import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarRef } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { TipoMensagemEnum } from './tipo-mensagem.enum';
import { SnackbarComponent } from './snackbar.component';
import { SnackConfig } from './snack-config';

@Injectable()
export class SnackbarService {

  constructor(private snackBar: MdSnackBar) {}

  showMessage(message: string, type: TipoMensagemEnum, title?: string, duration?: number, action?: string) {
    const sbConfig = this.getSbConfigs(title, message, type, duration, action);
    let snackRef: MdSnackBarRef<SnackbarComponent>;
    snackRef = this.snackBar.openFromComponent(SnackbarComponent);
    snackRef.instance.conf = sbConfig;
    snackRef.afterOpened().subscribe(() => {
      setTimeout(() => {
        snackRef.dismiss();
      }, sbConfig.duration);
    });
  }

  public getSbConfigs(title: string, message: string, typeMessage: TipoMensagemEnum,
                      duration: number, action: string): SnackConfig {
    const config = new SnackConfig;
    config.message = message;
    config.action = action;
    if (isNullOrUndefined(duration)) {
      config.duration = 5000;
    } else {
      config.duration = duration;
    }
    config.extraClass = typeMessage.toString();
    if (isNullOrUndefined(title)) {
      config.title = typeMessage.toString();
    } else {
      config.title = title;
    }
    return config;
  }

  public getAction(action: string): string {
    if ( isNullOrUndefined(action) ) {
      return action = 'x';
    }
    return action;
  }

  close() {
    this.snackBar.dismiss();
  }
}
