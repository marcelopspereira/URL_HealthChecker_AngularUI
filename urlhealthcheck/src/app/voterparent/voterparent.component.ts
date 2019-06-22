import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voterparent',
  templateUrl: './voterparent.component.html',
  styleUrls: ['./voterparent.component.css']
})
export class VoterparentComponent implements OnInit {

  agreed:any=0;
  disagreed:any=0;
  voters:string[]=["sandeep","deepak","raju"];

  constructor() { }

  ngOnInit() {
  }

  onVotedEvent(flag:boolean)
  {
    flag?this.agreed++:this.disagreed++;
  }

}
