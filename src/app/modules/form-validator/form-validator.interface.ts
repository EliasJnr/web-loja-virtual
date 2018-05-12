import { AbstractControl, FormControl } from '@angular/forms';

export interface IFormValidator {
  CPF(c: AbstractControl);
  CNPJ(c: AbstractControl);
  CPFeCNPJ(c: FormControl);
  URL(control: FormControl);
  data(c: FormControl);
  createValidatorRange(minValue, maxValue);
  email(c: FormControl);
  required(c: FormControl);
}
