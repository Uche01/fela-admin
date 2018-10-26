import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-app-statistics',
  templateUrl: './app-statistics.component.html',
  styleUrls: ['./app-statistics.component.css']
})
export class AppStatisticsComponent implements OnInit {

  num_users:number;
  product_keys:any[];
  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {
    this.db.list("/fcm_token").valueChanges()
      .subscribe(data=>{
        this.num_users = data.length;
        this.product_keys = data;
      })
  }

}
