import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-paneldetails',
  templateUrl: './paneldetails.component.html',
  styleUrls: ['./paneldetails.component.css']
})
export class PaneldetailsComponent implements OnInit {

  id:string;
  arrOfSteps:any[]=[];
  stepid:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      this.arrOfSteps=[];
      this.stepid=0;
      console.log(params.get("id"));
      this.id=params.get("id");
      
    })
  }

  addStep()
  {
    this.stepid=this.stepid+1;
    console.log("add step clicked");
    this.arrOfSteps.push({"id":this.stepid});
  }

}
