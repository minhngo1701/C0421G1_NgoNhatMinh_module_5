import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Position} from "../model/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Position[] | any> {
    return this.httpClient.get("http://localhost:3000/positions")
  }
}
