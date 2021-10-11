import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-cinema',
  templateUrl: './delete-cinema.component.html',
  styleUrls: ['./delete-cinema.component.css']
})
export class DeleteCinemaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
