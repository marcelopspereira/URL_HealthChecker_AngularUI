import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  str="Lohin";
  flag:boolean =true;
   @Input()
   id;
  constructor() { }

  ngOnInit() {
    console.log("step init");
  }


  toggleflag()
  {
    this.flag=!this.flag;
    console.log(this.str);
  }

}
