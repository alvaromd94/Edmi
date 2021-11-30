import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginSource = new BehaviorSubject<any>('');

  constructor() { }

  setUser(user: User){
    this.loginSource.next(user);
  }

  getUser(): Observable<User>{
    return this.loginSource.asObservable();
  }
}
