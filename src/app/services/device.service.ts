import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private myAppUrl = environment.production;
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
    return this.http.put(this.myAppUrl + this.myApiUrl + id, device);
  }
}
