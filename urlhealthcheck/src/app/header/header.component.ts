import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:string;
  activeflag:any="HOME";
  routerLinkVariable:any;

  @Output()
  valueChange = new EventEmitter();
  flag=false;

  /**
   * in html routerLink holds hardcoded value as string
   * but directive[routerLink] holds variable 
   * which can be chnaged dynamically inside .ts class file
   * refer html file to see routerLink in action
   */

  constructor() { }



  ngOnInit() {
  }

  changeActive(value:any)
  {
    this.activeflag=value;
  }

  togglenav()
  {
    this.flag=!this.flag;
    this.valueChange.emit(this.flag);
    console.log(this.flag);
  }

  
}
