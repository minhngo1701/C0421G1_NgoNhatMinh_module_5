import { Component, OnInit } from '@angular/core';
import {Iword} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dictionary: Iword| null | undefined;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const name = paramMap.get("name");
      this.dictionary = this.dictionaryService.findByWord(name);
    })
  }

  ngOnInit(): void {
  }

}
