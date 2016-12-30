import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';
import { MyValidators } from '../../validators/validators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      'name': ['', Validators.required],
      'company': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'email': ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
      'age': ['', [Validators.required, MyValidators.age] ],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]]
    },{ validator: MyValidators.passwordMatcher });
  }

}