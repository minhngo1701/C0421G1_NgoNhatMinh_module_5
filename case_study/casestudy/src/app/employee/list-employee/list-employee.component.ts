import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/employee";
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs";
import {MatDialog} from "@angular/material/dialog";
import {DeleteEmployeeComponent} from "../delete-employee/delete-employee.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] ;
  name: any;
  p: number = 1;
  constructor(public employeeService: EmployeeService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    // this.employeeService.getAll().subscribe(next => {
    //   this.employees = next;

    // })
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((response) => {
      this.employees = response;
    })
  }

  search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.employees = this.employees.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  openConfirmDeleteEmployee(id: any, name: any) {
    let dialog = this.dialog.open(DeleteEmployeeComponent, {
      width: '500px',
      position: {
        top: "50px"
      },
      data: {
        name: name
      }
    })
    dialog.afterClosed().subscribe(next=>{
      console.log(next)
      if (next == 'true') {
        this.employeeService.delete(id).subscribe(() => {
          this.ngOnInit();
          this.snackBar.open("Delete success!", "", {
            duration: 2000,
          })
        })
      }
    })
  }
}
