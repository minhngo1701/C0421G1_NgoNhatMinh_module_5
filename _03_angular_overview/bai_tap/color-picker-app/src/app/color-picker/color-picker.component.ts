import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  mycolor: string = "blue";
  mywidth: string = "100px";
  myheight: string = "100px";
  constructor() { }

  ngOnInit(): void {
  }

}
