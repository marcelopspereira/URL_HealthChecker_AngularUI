import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlhealthcheck';

  private _opened: boolean = false;
 
  flag=false;

  
  valueFromHeader(event)
  {
    this.flag=event;
    console.log("app comp");
    console.log(this.flag);
  }

}
