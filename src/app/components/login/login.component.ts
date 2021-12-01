import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, 
    private _loginService: LoginService) { 
    this.login = this.fb.group ({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  log(): void{
    this.loading = true;
    setTimeout(() => {      
      const user: User = {
        userName: this.login.value.user,
        password: this.login.value.password
      }
  
      this._loginService.setUser(user);
      this.router.navigate(['/device']);
      this.loading = false;
    }, 1000);
  }
}
