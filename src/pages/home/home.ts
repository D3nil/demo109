import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';

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
      'name': ['', [Validators.required]],
      'company': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'email': ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      'age': ['', [Validators.required]],
      'url': ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      'password': ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

}