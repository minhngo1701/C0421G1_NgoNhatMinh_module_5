import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Garage} from '../models/garage';
import {CarType} from '../models/car-type';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CarType[] | any> {
    return this.httpClient.get("http://localhost:3000/carTypes")
  }
}
