import { AbstractControl, ValidationErrors } from '@angular/forms';



export class FormValidators {
  static cantContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') !== -1) {
      return {cantContainSpace : true};
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'pabitra') {
          resolve ({shouldBeUnique : true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    /* setTimeout(() => {
      if (control.value === 'Pabitra') {
        return {shouldBeUnique : true};
      }
    }, 2000); */

  }
}
