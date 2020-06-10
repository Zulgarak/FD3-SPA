import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {

  static passwordEqual(field1, field2): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {

      return control.value[field1] !== control.value[field2] ? {
        passwordEqual: { value: control.value } } : null;
    };
  }
}
