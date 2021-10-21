import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {Customer} from "../../model/customer";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    code: new FormControl("", ([Validators.required,Validators.pattern("^KH-\\d{4}$")])),
    name: new FormControl("",[Validators.required, Validators.minLength(5)]),
    dateOfBirth: new FormControl("",[Validators.required, Validators.pattern(/^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$/)]),
    gender: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required, Validators.pattern(/^([0-9]{9}|[0-9]{12})$/)]),
    phone: new FormControl('',[Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90)|(\(84\)\+91))[0-9]{7}$/)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormControl('',[Validators.required]),
    customerType: new FormControl('',[Validators.required])
  });
  cusType: CustomerType[];
  id: number;
  editCustomer: Customer;
  constructor(private customerService: CustomerService, private route: Router, private cusTypeService: CustomerTypeService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
    this.cusTypeService.getAll().subscribe(next => {
      this.cusType = next;
      this.activatedRoute.paramMap.subscribe((paraMap:ParamMap) => {
        this.id = +paraMap.get("id");
        this.getCustomer(this.id)
        console.log(this.cusType);

      });
    });

  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(next => {
      this.editCustomer = next;
      this.editForm.setValue(this.editCustomer);
      console.log(this.editCustomer)
    })
  }

  updateCustomer(id: number) {
    if (this.editForm.valid) {
      this.customerService.updateCus(id, this.editForm.value).subscribe(next => {
        console.log(this.editForm.value)
        this.route.navigateByUrl("/customer")
        this.snackBar.open("update success!", "", {
          duration: 2000,
        })
      })
    }
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

