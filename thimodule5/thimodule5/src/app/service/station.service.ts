import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../models/car-type';
import {Station} from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Station[] | any> {
    return this.httpClient.get("http://localhost:3000/stations")
  }
}
