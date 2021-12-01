import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  //LOCAL: 
  // private myAppUrl = 'https://localhost:44356/api';
  //PROD:
  private myAppUrl = 'https://edmibackend20211130223350.azurewebsites.net/api';
  private myApiUrl = '/device/'

  constructor(private http: HttpClient) { }

  getDeviceList(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteDevice(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveDevice(device: Device): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, device);
  }

  updateDevice(id:number, device: Device): Observable<any>{
    if(device.type !== 'Gateway'){
      device.ip = undefined;
      device.port = undefined;
    }
    return this.http.put(this.myAppUrl + this.myApiUrl + id, device);
  }
}
