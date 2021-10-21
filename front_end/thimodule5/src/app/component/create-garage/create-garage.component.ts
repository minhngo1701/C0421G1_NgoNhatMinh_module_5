import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GarageService} from '../../service/garage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-garage',
  templateUrl: './create-garage.component.html',
  styleUrls: ['./create-garage.component.css']
})
export class CreateGarageComponent implements OnInit {
  createForm : FormGroup;
  constructor(private garageService: GarageService, private route: Router) {
    this.createForm = new FormGroup({
      id: new FormControl(""),
      codeNumber: new FormControl("", [Validators.required]),
      carType: new FormControl("", [Validators.required]),
      station: new FormControl("",[Validators.required]),
      locationStart: new FormControl("",[Validators.required]),
      locationEnd: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern(/^(090|093|097)[0-9]{7}$/)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      timeStart: new FormControl('',[Validators.required]),
      timeEnd: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  createGarage() {
    this.garageService.create(this.createForm.value).subscribe(() => {
      this.route.navigateByUrl("/garage");
    })
  }
  validationMessage = {
    carType: [
      {type : 'required', message: 'Car type must be not empty.'},
    ],
    station: [
      {type: 'required', message: 'station must be not empty.'},
    ],
    locationStart: [
      {type: 'required', message: 'Location Start must be not empty.'},
    ],
    locationEnd: [
      {type : 'required', message: 'Location End must be not empty.'},
    ],
    phone: [
      {type : 'required', message: 'Phone must be not empty.'},
      {type : 'pattern', message: 'Phone is wrong.\n Ex: 090xxxxxxx hoặc 093xxxxxxx or 097xxxxxxx'},
    ],

    email: [
      {type : 'required', message: 'Phone must be not empty.'},
      {type : 'email', message: 'Email is wrong. Ex: abc@gmail.com'},
    ],
    timeStart: [
      {type : 'required', message: 'Time Start must be not empty.'},
    ],
    timeEnd: [
      {type : 'required', message: 'Time end be not empty.'},
    ],
  };
}
