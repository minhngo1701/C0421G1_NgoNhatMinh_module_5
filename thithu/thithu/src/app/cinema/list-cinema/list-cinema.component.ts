import { Component, OnInit } from '@angular/core';
import {CinemaService} from "../../service/cinema.service";
import {Cinema} from "../../model/cinema";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCinemaComponent} from "../delete-cinema/delete-cinema.component";

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {
  cinemas: Cinema[];
  constructor(private cinemaService: CinemaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cinemaService.getAll().subscribe(next => {
      this.cinemas = next;
    })
  }

  openConfirmDelete(id: number, name: string) {
    let dialog = this.dialog.open(DeleteCinemaComponent, {
      width: '500px',
      position: {
        top: "20px"
      },
      data: {
        movie: name
      }
    })
    dialog.afterClosed().subscribe(next=>{
      console.log(next)
      if (next == 'true') {
        this.cinemaService.deleteC(id).subscribe(() => {
          this.ngOnInit();
        })
      }
    })
  }
}
