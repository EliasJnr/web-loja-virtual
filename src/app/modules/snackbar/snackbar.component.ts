import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { SnackConfig } from './snack-config';

@Component({
  selector: 'snackbar-default',
  template: `
    <div class="alert {{conf.extraClass}}" data-position="bottom">
      <button type="button" class="close" aria-hidden="true">
        <span (click)="closeSnack()">× {{conf.action}}</span>
      </button>
      <p class="title-default"><i class="material-icons">done</i> {{conf.title}}</p>
      <p class="message">{{conf.message}}</p>
    </div>
  `,
  styleUrls: [
    './snackbar.component.sass']
})

export class SnackbarComponent {

  public conf: SnackConfig;

  constructor(public snackBar: MdSnackBar) {
  }

  closeSnack() {
    this.snackBar.dismiss();
  }
}
