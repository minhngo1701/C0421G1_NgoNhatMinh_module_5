import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EducationDegree} from "../model/education-degree";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<EducationDegree[] | any> {
    return this.httpClient.get("http://localhost:3000/educationDegrees")
  }
}
