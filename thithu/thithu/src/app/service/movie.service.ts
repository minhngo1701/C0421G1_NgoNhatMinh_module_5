import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../model/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Movie |any> {
    return this.httpClient.get("http://localhost:3000/movie");
  }
}
