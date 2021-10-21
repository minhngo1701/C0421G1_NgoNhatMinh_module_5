import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarType} from '../../models/car-type';
import {Station} from '../../models/station';
import {Garage} from '../../models/garage';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {GarageService} from '../../service/garage.service';
import {CarTypeService} from '../../service/car-type.service';
import {StationService} from '../../service/station.service';

@Component({
  selector: 'app-update-garage',
  templateUrl: './update-garage.component.html',
  styleUrls: ['./update-garage.component.css']
})
export class UpdateGarageComponent implements OnInit {

  editForm: FormGroup = new FormGroup({
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
  });

  id: number;
  editGarage: Garage;
  constructor(private garageService: GarageService, private carTypeService: CarTypeService,private stationService: StationService, private route: Router,  private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {

    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap) => {
      this.id = +paraMap.get("id");
      this.getGarage(this.id);
    })
  }

  ngOnInit(): void {
  }

  getGarage(id: number) {
    return this.garageService.findById(id).subscribe(next => {
      this.editGarage = next;
      this.editForm.setValue(this.editGarage);

    })
  }

  updateGarage() {
    console.log(this.editForm.value)
    if (this.editForm.valid) {
      this.garageService.update(this.editForm.value).subscribe(next => {
        console.log(this.editForm.value)
        this.route.navigateByUrl("/garage")
        this.snackBar.open("update success!", "", {
          duration: 2000,
        })
      })
    }
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
