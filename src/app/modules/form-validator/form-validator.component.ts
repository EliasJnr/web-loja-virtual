import { FormControl, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef } from '@angular/core';
import { FormMsgsErrors } from 'app/modules/form-validator/form-msgs-errors.enum';

@Component({
  selector: 'validator',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormValidator),
      multi: true,
    },
  ],
  template: ``
})

export class FormValidator {

  static required(c: FormControl) {
    let value: any = '';
    if ( c.value != null)
      value = c.value;

    const error = {
      required: {
        valid: false,
        message: FormMsgsErrors.required
      }
    };
    if (value instanceof Object) {
      return null;
    }
    if (value && !value.toString().trim())
      return error;

    return (value == null || value.toString().length ) ? null : error;
  }

  static url(c: FormControl) {
    let value;
    if ( c.value != null)
      value = c.value;

    const URL_REGEXP = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;

    return URL_REGEXP.test(value) ? null : {
      url: {
        valid: false,
        message: FormMsgsErrors.URL
      }
    };
  }
}
