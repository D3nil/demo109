import { AbstractControl, FormControl } from '@angular/forms';

export class MyValidators{

  static passwordMatcher(control: AbstractControl){
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    if (!password || !confirm) {
      return null;
    }
    return password.value === confirm.value ? null : { nomatch: true };
  }

  static age(control: FormControl){
    const age = control;
    if (!age) return null;
    return age.value >= 18 ? null : { invalid: true };
  }

}