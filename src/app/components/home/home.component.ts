import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.getList()
  }

  list: any;
  selectedOption: string = "";
  titles:string[] = new Array();
  
  


  getList(){
    this.af.list("/Messages").valueChanges()
      .subscribe(data => {
        this.list = data
        //console.log(this.list)

        this.titles[0] = "today"
        this.list.forEach(element => {
          this.titles.push(element.title);
        });
      });

     return this.titles; 
  }

}
