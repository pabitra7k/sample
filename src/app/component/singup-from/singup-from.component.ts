import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { PasswordValidation } from '../../PasswordValidation';
import { User } from '../../User';

@Component({
  selector: 'app-singup-from',
  templateUrl: './singup-from.component.html',
  styleUrls: ['./singup-from.component.scss']
})
export class SingupFromComponent implements OnInit {
  [x: string]: any;
  formHeading = "Fill all details";
  courseList: String[];
  signupForm: FormGroup;
  get firstname() { return this.signupForm.get('firstname'); }
  get gender() { return this.signupForm.get('gender'); }
  get course() { return this.signupForm.get('course'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get terms() { return this.signupForm.get('terms'); }
  
  constructor(private fb:FormBuilder) { }

  public onFormSubmit() {
    if(this.signupForm.valid) {
        this.user = this.signupForm.value;
        console.log(this.user);
        /* Any API call logic via services goes here */
    }
}
  ngOnInit() {
    this.courseList = ['Angular 4','React JS','Node JS','Others'];
    this.genderList = ['Male', 'Female', 'Other']
  //If I am using FormBuilder the we write below code //
  this.signupForm  = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,20}')]], 
    gender: ['', Validators.required],
    course: ['', Validators.required],
    email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //passwordmatch: this.fb.group({
    password: ['',[Validators.required, Validators.pattern('[A-Za-z]{3,20}')]],
     // confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$')]]
    //{Validator: PasswordValidation.MatchPassword // your validation method
    //}),
    terms: ['', Validators.requiredTrue]
    
})

 }
}