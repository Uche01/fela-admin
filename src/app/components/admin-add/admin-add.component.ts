import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {HttpHeaderResponse} from '@angular/common/http'
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit{

  _selectedTopic: string;
  push_id:string;

  get selectedTopic(): string {
    // transform value for display
    return this._selectedTopic.toUpperCase();
  }

  @Input()
  set selectedTopic(newTopic: string) {
    this._selectedTopic = newTopic;

    this.clicked = false;
    if(this._selectedTopic != "today"){
      this.db.list("/Messages").valueChanges()
      .subscribe(data => {
        this.list = data;

        this.list.forEach(element => {
          if(element.title == this._selectedTopic){
            //this.push_id = element.
            this.htmlContent = element.description
            this.title = element.title
            this.notif_image_url = element.notif_image_url
            this.short_desc = element.short_desc
          }
        });
      })
    }




  }


  clicked = false;

  isValidInput(){
    if(this.title==""||this.short_desc==""||this.htmlContent==""||this.date==""||this._selectedTopic=="")
      return false;
    return true;
  }

  submit(){
    this.clicked=true;
    console.log("submitted");
    console.log(this.selectedTopic)
    if(this._selectedTopic == "today")
      this.db.list("Messages").push({date_time:this.date, short_desc:this.short_desc,
         description:this.htmlContent,
         title: this.title, notif_image_url: this.notif_image_url})
          .then(data=>{
            if(data){this.toastr.success('FELA admin!', 'Message added successfully!!!');}
            else{this.toastr.warning('FELA admin!', 'Failed to add message!');}
        })
    else{
      this.db.list("Messages").snapshotChanges()
        .subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            if(snapshot.payload.child("title").val() == this._selectedTopic){
              var push_id = snapshot.key;
                //console.log(snapshot.key);
              
                this.db.object(`Messages/${push_id}/`)
                  .update({title: this.title, 
                    description:this.htmlContent, short_desc:this.short_desc,
                     date_time: this.date, notif_image_url: this.notif_image_url})
                     .then(error=>{
                       if(!error){
                        this.toastr.success('FELA admin!', 'Message updated successfully!!!');
                       }
                     })
                    
              
            }
          });
        });
    }

    
  }


  constructor(private db: AngularFireDatabase, private toastr: ToastrService) { }

  editorConfig = {
    editable: true,
    spellcheck: true,
    height: '400px',
    width: 'auto',
    minHeight: '5rem',
    translate: 'no'
  };

  title = "";
  date = this.formatDate(new Date());
  short_desc = "";
  item = document.createElement('div');
  
  htmlContent = ""
  
  myFunction(){
    this.htmlContent = this.htmlContent.replace("<img src", "<img width=\"100%\" src");
  }

  list:any
  notif_image_url = "";


  createHtmlFromStr(text:string) {
    var xmlString = text
    , parser = new DOMParser()
    , doc = parser.parseFromString(xmlString, "text/xml");
  doc.firstChild // => <div id="foo">...
  doc.firstChild.firstChild

  }

  ngOnInit() {}

  formatDate(date):string {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
  
    return day + ' ' + monthNames[monthIndex];
  }

}
