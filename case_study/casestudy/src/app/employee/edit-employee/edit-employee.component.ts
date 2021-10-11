import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {DivisionService} from "../../service/division.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Position} from "../../model/position";
import {EducationDegree} from "../../model/education-degree";
import {Division} from "../../model/division";
import {Employee} from "../../model/employee";


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editForm: FormGroup = new FormGroup({
    id:new FormControl(""),
    codeEmployee: new FormControl("", [Validators.compose([Validators.required,Validators.pattern("^NV-\\d{4}$")])]),
    name: new FormControl("",[Validators.compose([Validators.required,Validators.minLength(4)])]),
    dateOfBirth: new FormControl("",[Validators.compose([Validators.required])]),
    idCard: new FormControl("",[Validators.compose([Validators.required,Validators.pattern("^\\d{12}|\\d{9}")])]),
    salary: new FormControl("",[Validators.compose([Validators.required,Validators.min(1)])]),
    phone: new FormControl("",[Validators.compose([Validators.required,Validators.pattern("^[(][84]{2}[)]\\\\+9[0-1]\\d{7}|09[0-1]\\d{7}$")])]),
    email: new FormControl("",[Validators.compose([Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")])]),
    address: new FormControl(""),
    position: new FormControl(""),
    educationDegree: new FormControl(""),
    division: new FormControl("")
  })
  positions: Position[];
  educationDegrees: EducationDegree[];
  divisions: Division[];
  editEmployee: Employee;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,private employeeService: EmployeeService, private pService: PositionService, private eduService: EducationDegreeService, private divService: DivisionService,private route: Router) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
      this.getAllList();
      this.getEmployee(this.id);
    })
  }

  ngOnInit(): void {
  }
  getAllList() {
     this.pService.getAll().subscribe(next => {
      this.positions = next;
    });
    this.eduService.getAll().subscribe(next => {
      this.educationDegrees = next;
    });
    this.divService.getAll().subscribe(next => {
      this.divisions = next;
    });
  }
  getEmployee(id: number) {
    return this.employeeService.findById(id).subscribe((next )=> {
      this.editEmployee = next;
      this.editForm.setValue(this.editEmployee);
      // console.log(this.editEmployee)

    });
  }

  updateEmployee(id: number) {
    this.employeeService.update(id, this.editForm.value).subscribe(next => {
      this.route.navigateByUrl("/employee")
    })
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
    salary:[],
    phone:[
      {type: "require", message: "phone must not be empty"},
      {type: "pattern", message: "phone is wrong. Ex: 090xxxxxxx or 091xxxxxxx or (84)90xxxxxxx or (84)91xxxxxxx (x is number 0-9)"},
    ],
    email:[
      {type: "require", message: "Email must not be empty"},
      {type: "pattern", message: "Email is wrong. Ex: abc@gmail.com"},
    ],


  }

}


