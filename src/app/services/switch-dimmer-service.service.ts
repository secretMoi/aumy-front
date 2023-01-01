import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TuyaDeviceApiInfo} from "./backend-models/tuya-device-api-info";
import {MoesSwitchDimmer} from "./backend-models/moes-switch-dimmer";

@Injectable({
  providedIn: 'root'
})
export class SwitchDimmerServiceService {

  constructor(private httpClient: HttpClient) { }

  public setState(device: string, state: boolean): Observable<unknown> {
    if(state)
      return this.httpClient.post(`http://localhost:5000/tuya/light/${device}/turn-on`, null);

    return this.httpClient.post(`http://localhost:5000/tuya/light/${device}/turn-off`, null);
  }

  public setBrightness(device: string, brightness: number): Observable<unknown> {
    return this.httpClient.post(`http://localhost:5000/tuya/light/${device}/brightness/${Math.round(brightness)}`, null);
  }

  public getDevices(): Observable<TuyaDeviceApiInfo[]> {
    return this.httpClient.get<TuyaDeviceApiInfo[]>(`http://localhost:5000/tuya/device-list`);
  }

  public getDeviceInfo(device: string): Observable<MoesSwitchDimmer> {
    return this.httpClient.get<MoesSwitchDimmer>(`http://localhost:5000/tuya/light/${device}/info`);
  }
}
