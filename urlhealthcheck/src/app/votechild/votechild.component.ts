import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-votechild',
  templateUrl: './votechild.component.html',
  styleUrls: ['./votechild.component.css']
})
export class VotechildComponent implements OnInit {

  @Input() name:string;
  @Output() voted=new EventEmitter<boolean>();
  didVote:boolean=false;
  

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

onVote(agreed:boolean)
{
  this.voted.emit(agreed);
  this.didVote=true;
  this.authService.authenticate("sandeep","password").subscribe(
    data=>{
      console.log(data);
    }
  );
}
}
