import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[] | any> {
    return this.httpClient.get("http://localhost:3000/customers")
  }
  createCus(customer: Customer): Observable<any> {
    return this.httpClient.post("http://localhost:3000/customers", customer)
  }
  updateCus(id: number | any, customer: Customer | any): Observable<Customer | any> {
    return this.httpClient.patch("http://localhost:3000/customers/" + id, customer)
  }
  findById(id: number| any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/customers/" + id)
  }
  deleteCus(id: number | any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/customers/" + id)
  }
}
