import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DeviceDTO} from "./backend-models/device-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public list(): Observable<DeviceDTO[]> {
    return this.http.get<DeviceDTO[]>('http://localhost:5000/device/list');
  }
}
