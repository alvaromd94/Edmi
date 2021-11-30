import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  user: any;
  constructor(private _loginService: LoginService, private toastr: ToastrService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let result = false;

    this._loginService.getUser().subscribe((value) => {
      this.user = value;
      if (this.user.userName === 'admin' && this.user.password === 'admin') {
        result = true;
      }
      else {
        this.toastr.error('Invalid session. Please log in again', 'Error');
        this.router.navigate(['/login']);
        result = false;
      }
    });
    return result;
  }

}
