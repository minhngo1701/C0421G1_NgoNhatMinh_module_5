import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[] | any> {
    return this.httpClient.get("http://localhost:3000/customerType");
  }
}
