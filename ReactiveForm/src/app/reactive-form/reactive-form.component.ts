import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormValidators} from './form.validators';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form = new FormGroup({
    name : new FormControl('John Doe', Validators.required),
    email: new FormControl('', [Validators.required], FormValidators.shouldBeUnique),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      FormValidators.cantContainSpace
    ])
  });

  submitForm (data: any) {
    console.log(data.toString());
    // let isValid = authService.login(this.form.value);
    const isValid = true;
    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }

  }

  get userName() {
    // return this.form.controls.name;
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  constructor() { }

  ngOnInit() {
  }

}
