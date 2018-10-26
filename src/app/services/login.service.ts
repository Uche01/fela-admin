import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFireDatabase) {
    
   }
   
}
