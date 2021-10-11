import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  name: any;
  p: number = 1;
  constructor(private customerService: CustomerService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(next => {
      this.customers = next;
    })
  }


  search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.customers = this.customers.filter(data => {
        return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }
  //
  key: string = "id";
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openDialogDeleteCus(id:number, name:string) {
    let dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: "500px",
      position: {
        top: '20px'
      },
      data: {
        id: id,
        name: name
      }
    })
    dialogRef.afterClosed().subscribe(next => {
      if (next == "true") {
        this.customerService.deleteCus(id).subscribe(() => {
          this.ngOnInit()
          this.snackBar.open("Delete success!", "", {
            duration: 2000,
            verticalPosition: "top"
          })
        })
      }
    })
  }
}
