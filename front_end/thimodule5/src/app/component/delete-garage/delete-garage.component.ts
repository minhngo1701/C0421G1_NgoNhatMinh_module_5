import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-garage',
  templateUrl: './delete-garage.component.html',
  styleUrls: ['./delete-garage.component.css']
})
export class DeleteGarageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
