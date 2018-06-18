import { Component,OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import {User} from "./interface/user";

let obj : AppComponent;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  implements OnInit{
  name = 'CSV Upload Processing';
  users: User[];
  path: string[] = ['user'];
  order: number = 1;

  ngOnInit(){
    obj = this;
  }
  onChange(files: File[]){
    if(files[0]){
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          console.log(result);
          this.users = result.data;
        }
      });
    }
  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }
}
