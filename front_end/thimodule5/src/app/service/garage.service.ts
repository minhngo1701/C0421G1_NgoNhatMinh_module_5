import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Garage} from '../models/garage';
import {Page} from 'ngx-pagination/dist/pagination-controls.directive';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private httpClient: HttpClient) { }

  getAll(page): Observable<Garage[] | any> {
    return this.httpClient.get("http://localhost:8080/garage/list?page=" + page)
  }

  findById(id: number | any): Observable<Garage | any> {
    return this.httpClient.get("http://localhost:8080/garage" + "/" + id);
  }

  create(garage: Garage) : Observable<any> {
    return this.httpClient.post("http://localhost:8080/garage/create", garage)
  }

  update(garage: Garage | any): Observable<Garage | any> {
    return this.httpClient.patch("http://localhost:8080/garage/edit", garage)
  }

  delete(id: number | any): Observable<Garage|any> {
    return this.httpClient.delete("http://localhost:8080/garage/delete" + "/" + id)
  }
}
