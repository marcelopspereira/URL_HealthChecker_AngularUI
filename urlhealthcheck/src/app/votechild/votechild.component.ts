import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-votechild',
  templateUrl: './votechild.component.html',
  styleUrls: ['./votechild.component.css']
})
export class VotechildComponent implements OnInit {

  @Input() name:string;
  @Output() voted=new EventEmitter<boolean>();
  didVote:boolean=false;

  constructor() { }

  ngOnInit() {
  }

onVote(agreed:boolean)
{
  this.voted.emit(agreed);
  this.didVote=true;
}
}
