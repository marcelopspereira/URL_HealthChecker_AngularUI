import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  str="Lohin";
  flag:boolean =true;

  constructor() { }

  ngOnInit() {
  }


  toggleflag()
  {
    this.flag=!this.flag;
  }

}
