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
  selectedOption: string = "today";
  titles:string[] = new Array();
  
  


  getList(){
    //this.titles = new Array();
    this.af.list("/Messages").valueChanges()
      .subscribe(data => {
        this.list = data
        this.titles = new Array();
        //console.log(this.list)

        this.titles[0] = "today"
        this.list.forEach(element => {
          this.titles.push(element.title);
        });
      });

     return this.titles; 
  }

}
