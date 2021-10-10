import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[] | any> {
    return this.httpClient.get("http://localhost:3000/employees")
  }

  create(employee: Employee): Observable<any> {
    return this.httpClient.post("http://localhost:3000/employees", employee)
  }

  findById(id: number | any): Observable<Employee | any> {
    return this.httpClient.get("http://localhost:3000/employees" + "/" + id);
  }

  update(id:number | any, employee: Employee | any): Observable<any> {
    return this.httpClient.patch("http://localhost:3000/employees" + "/" + id, employee)
  }

  delete(id: number | any): Observable<Employee|any> {
    return this.httpClient.delete("http://localhost:3000/employees" + "/" + id)
  }
}
