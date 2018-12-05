import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af: AngularFireDatabase) { }

  message:string;

  receiveMessage($event) {
    this.message = $event
    if(this.message == "false")
      this.getList("/Messages2")
    else
      this.getList("/Messages1")
    console.log(this.message)
  }

  ngOnInit() {
    
    this.getList("/Messages1")
  }

  list: any;
  selectedOption: string = "today";
  titles:string[] = new Array();
  
  


  getList(strpath:string){
    //this.titles = new Array();
    this.af.list(strpath).valueChanges()
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
