import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-app-statistics',
  templateUrl: './app-statistics.component.html',
  styleUrls: ['./app-statistics.component.css']
})
export class AppStatisticsComponent implements OnInit {

  num_users:number;
  
  product_keys:any[];


  //@Input() isChecked: string;


  constructor(private db : AngularFireDatabase) {
    
  }
  message:string;

  ngOnInit() {
    //console.log(this.isChecked+"yes")
    this.db.list("/fcm_token1").valueChanges()
      .subscribe(data=>{
        this.num_users = data.length;
        //this.product_keys = data;
      })
      
  }
  
  receiveMessage(isChecked:string) {
    if(isChecked=="true"){
      console.log(isChecked+"yes")
      this.db.list("/fcm_token1").valueChanges()
      .subscribe(data=>{
      this.num_users = data.length;
      //this.product_keys = data;
    })
    }
  else
    {
      console.log(isChecked+"yes")
      this.db.list("/fcm_token2").valueChanges()
      .subscribe(data=>{
      this.num_users = data.length;
      //this.product_keys = data;
    })
    }
  }
  
  

}
