import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createForm: FormGroup;
  customerType: CustomerType[];
  constructor(private customerService: CustomerService, private cusType: CustomerTypeService, private route: Router, private snackBar: MatSnackBar) {
   this.createForm = new FormGroup({
      id: new FormControl(),
     code: new FormControl("", ([Validators.required,Validators.pattern("^KH-\\d{4}$")])),
     name: new FormControl("",[Validators.required, Validators.minLength(5)]),
     dateOfBirth: new FormControl("",[Validators.required, Validators.pattern(/^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$/)]),
     gender: new FormControl('',[Validators.required]),
     idCard: new FormControl('',[Validators.required, Validators.pattern(/^([0-9]{9}|[0-9]{12})$/)]),
     phone: new FormControl('',[Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90)|(\(84\)\+91))[0-9]{7}$/)]),
     email: new FormControl('',[Validators.required, Validators.email]),
     address: new FormControl('',[Validators.required]),
     customerType: new FormControl('',[Validators.required])
    })
    this.cusType.getAll().subscribe(next => {
      this.customerType = next;
    })
  }

  ngOnInit(): void {
  }

  createCustomer() {
    this.customerService.createCus(this.createForm.value).subscribe(() => {
      // console.log(this.createForm.value);
      this.route.navigateByUrl("/customer");
      this.snackBar.open("create success!", "", {
        duration: 2000,
        verticalPosition: "top"
      })
    })
  }
  validationMessage = {
    code: [
      {type : 'required', message: 'Not null'},
      {type : 'pattern', message: '(KH-XXXX) x is number'},
    ],
    name: [
      {type : 'required', message: 'Not null'},
      {type : 'minlength', message: 'length must be greater than 5'},
    ],
    gender: [
      {type: 'required', message: 'Not null'},
    ],
    idCard: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: 'Invalid, id card must contain 9 or 12 number'},
    ],
    phone: [
      {type : 'required', message: 'Not null'},
      {type : 'pattern', message: 'Invalid, 090xxxxxxx or 091xxxxxxx'},
    ],
    customerType: [
      {type : 'required', message: 'Not null'},
    ],
    birthday: [
      {type : 'required', message: 'Not null'},
      {type : 'pattern', message: 'invalid'},
    ],
    email: [
      {type : 'required', message: 'Not null'},
      {type : 'email', message: 'invalid'},
    ],
    address: [
      {type : 'required', message: 'Not null'},
    ],
  };
}
