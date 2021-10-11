import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../model/cinema";

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Cinema | any> {
    return this.httpClient.get("http://localhost:3000/cinemas");
  }

  createC(cinema: Cinema): Observable<any> {
    return this.httpClient.post("http://localhost:3000/cinemas", cinema);
  }


  deleteC(id): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/cinemas/" + id);
  }
}
