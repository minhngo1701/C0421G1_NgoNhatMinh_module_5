import { Component, OnInit } from '@angular/core';
import {Garage} from '../../models/garage';
import {GarageService} from '../../service/garage.service';
import {CarTypeService} from '../../service/car-type.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteGarageComponent} from '../delete-garage/delete-garage.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Station} from '../../models/station';

@Component({
  selector: 'app-list-garage',
  templateUrl: './list-garage.component.html',
  styleUrls: ['./list-garage.component.css']
})
export class ListGarageComponent implements OnInit {
  garages: Garage[];
  page: number = 0;

  constructor(private garageService: GarageService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.garageService.getAll(this.page).subscribe(next => {
      this.garages = next.content;
      console.log(this.garages)
    })
  }

  next() {
    this.page++;
    this.ngOnInit();
  }

  previous() {
    if (this.page > 0) {
      this.page--;
      this.ngOnInit();
    }
  }

  openDialogDelete(id: number, name: Station) {
    let dialogRef = this.dialog.open(DeleteGarageComponent, {
      width: "500px",
      position: {
        top: '50px'
      },
      data: {
        id: id,
        name: name
      }
    })
    dialogRef.afterClosed().subscribe(next => {
      if (next == "true") {
        this.garageService.delete(id).subscribe(() => {
          this.ngOnInit()
          this.snackBar.open("Delete success!", "", {
            duration: 2000,
          })
        })
      }
    })
  }
}
