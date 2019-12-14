import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
   @Input()
   delIconFlag;

   @Output()
   emitDel =new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("step init");
  }

  delItem(id)
  {
    console.log("Item To Del",id);
    this.emitDel.emit(id);
  }

  toggleflag()
  {
    this.flag=!this.flag;
    console.log(this.str);
  }

}
