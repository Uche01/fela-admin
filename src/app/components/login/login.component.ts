import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  isLogin:boolean = false;
  constructor(private db: AngularFireDatabase, private router: Router) {}

   tryLogin(): void{
    this.db.list(`Users/${this.email}/`).valueChanges()
      .subscribe(data =>{
        if(data[0] == this.password)
          {
            localStorage.setItem("is_login", "true");
            console.log("success")
            this.router.navigate(['home']);
          }
      })
   }
   
   
  ngOnInit() {
    console.log(this.isLogin)
  }
  

}
