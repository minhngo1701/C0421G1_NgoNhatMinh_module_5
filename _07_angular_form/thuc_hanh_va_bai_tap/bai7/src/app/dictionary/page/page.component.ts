import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Router} from "@angular/router";
import {Iword} from "../../model/iword";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  dictionaryList: Iword[];

  constructor(private dictionaryService : DictionaryService) {
    this.dictionaryList = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }


}
