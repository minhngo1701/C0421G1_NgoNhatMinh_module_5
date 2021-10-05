import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    confirmPass: new FormControl("", [Validators.required, Validators.minLength(6)]),
    country: new FormControl("",[Validators.required]),
    age: new FormControl("", [Validators.required, Validators.min(18)]),
    gender: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
  })
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get confirmPass() {
    return this.registerForm.get("confirmPass");
  }
  get country() {
    return this.registerForm.get("country");
  }
  get age() {
    return this.registerForm.get("age");
  }
  get gender() {
    return this.registerForm.get("gender");
  }
  get phone() {
    return this.registerForm.get("phone");
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
