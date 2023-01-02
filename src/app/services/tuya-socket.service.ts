import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TuyaSocketService {

  constructor(private httpClient: HttpClient) { }

  public setState(deviceId: string, state: boolean): Observable<unknown> {
    if(state)
      return this.httpClient.post(`http://localhost:5000/tuya/socket/${deviceId}/turn-on`, null);

    return this.httpClient.post(`http://localhost:5000/tuya/socket/${deviceId}/turn-off`, null);
  }
}
