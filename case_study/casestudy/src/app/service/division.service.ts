import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Division} from "../model/division";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Division[] | any> {
    return this.httpClient.get("http://localhost:3000/divisions")
  }
}
