import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public router: Router, public loginComponent:LoginComponent) { 
    
  }
  canActivate(): boolean {

    if(localStorage.getItem("is_login")!="true"){
      this.router.navigate(['login']);
      //console.log(this.loginComponent.isLogin)
      return false;
    }
    return true;
  }
}
