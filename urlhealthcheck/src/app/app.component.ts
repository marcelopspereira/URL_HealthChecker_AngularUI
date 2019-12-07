import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlhealthcheck';

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
    this.t=!this.t;
    console.log(this.t)
  }
  t=true;

}
