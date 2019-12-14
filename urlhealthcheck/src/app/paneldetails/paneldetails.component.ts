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
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      this.arrOfSteps=[];
      console.log(params.get("id"));
      this.id=params.get("id");
      
    })
  }

  addStep()
  {
    console.log("add step clicked");
    this.arrOfSteps.push({});
  }

}
