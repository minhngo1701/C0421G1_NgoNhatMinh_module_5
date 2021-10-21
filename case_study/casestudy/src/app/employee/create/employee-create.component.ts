import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";
import {Position} from "../../model/position";
import {PositionService} from "../../service/position.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {DivisionService} from "../../service/division.service";
import {EducationDegree} from "../../model/education-degree";
import {Division} from "../../model/division";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup;
  positionList: Position[];
  educationDegreeList: EducationDegree[];
  divisionList: Division[];
  constructor(private employeeService: EmployeeService,private positionService: PositionService,private educationDegreeService: EducationDegreeService,private divisionService: DivisionService, private route: Router,private snackBar: MatSnackBar) {
    this.employeeForm = new FormGroup({
      codeEmployee: new FormControl("", [Validators.compose([Validators.required, Validators.pattern("^NV-\\d{4}$")])]),
      name: new FormControl("",[Validators.compose([Validators.required,Validators.minLength(4)])]),
      dateOfBirth: new FormControl("",[Validators.compose([Validators.required])]),
      idCard: new FormControl("",[Validators.compose([Validators.required,Validators.pattern("^\\d{12}|\\d{9}")])]),
      salary: new FormControl("",[Validators.compose([Validators.required,Validators.min(1)])]),
      phone: new FormControl("",[Validators.compose([Validators.required,Validators.pattern("^[(][84]{2}[)]\\\\+9[0-1]\\d{7}|09[0-1]\\d{7}$")])]),
      email: new FormControl("",[Validators.compose([Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")])]),
      address: new FormControl("",[Validators.required]),
      position: new FormControl("",[Validators.required]),
      educationDegree: new FormControl("",[Validators.required]),
      division: new FormControl("",[Validators.required])
    });
    this.positionService.getAll().subscribe(next => {
      this.positionList = next;
    });
    this.educationDegreeService.getAll().subscribe(next => {
      this.educationDegreeList = next;
    });
    this.divisionService.getAll().subscribe(next => {
      this.divisionList = next;
    });

  };

  ngOnInit(): void {
  }

  createEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.create(this.employeeForm.value).subscribe(next => {
        this.route.navigateByUrl("/employee");
        // console.log(this.employeeForm.value);
        this.snackBar.open("create success!", "", {
          duration: 3000,
        })
      })
    }
  }

  validationMsg = {
    name: [
      {type: "required", message: "Name must not be empty"},
      {type: "minlength", message: "Name must greater than 4"},
    ],
      codeEmployee: [
        {type: "require", message: "Code must not be empty"},
        {type: "pattern", message: "Code employee is wrong. Ex: NV-xxxx (x is number 0-9)"},
    ],
    dateOfBirth: [
      {type: "require", message: "date of birth must not be empty"},
    ],
    idCard:[
      {type: "require", message: "Id card must not be empty"},
      {type: "pattern", message: "Id card employee is wrong. Ex: XXXXXXXXX or XXXXXXXXXXXX  (x is number 0-9)"},
    ],
    salary:[
      {type: "require", message: "salary must not be empty"},
      {type: "min", message: "salary must be positive"},
    ],
    phone:[
      {type: "require", message: "phone must not be empty"},
      {type: "pattern", message: "phone is wrong. Ex: 090xxxxxxx or 091xxxxxxx or (84)90xxxxxxx or (84)91xxxxxxx (x is number 0-9)"},
    ],
    email:[
      {type: "require", message: "Email must not be empty"},
      {type: "pattern", message: "Email is wrong. Ex: abc@gmail.com"},
    ],
    address: [
      {type: "require", message: "address must not be empty"},
    ],
    position: [
      {type: "require", message: "position must not be empty"},
    ],
    educationDegree: [
      {type: "require", message: "educationDegree must not be empty"},
    ],
    division: [
      {type: "require", message: "division must not be empty"},
    ]

  }
}
