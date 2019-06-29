import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-urlapp-main",
  templateUrl: "./urlapp-main.component.html",
  styleUrls: ["./urlapp-main.component.css"]
})
export class URLAppMainComponent implements OnInit {
  constructor() {}

  cols: any[];
  selectedUrls: any[];
  urls: any[];

  ngOnInit() {
    this.cols = [
      { field: "appCode", header: "App Code" },
      { field: "appGroup", header: "Group" },
      { field: "appUrl", header: "Url" },
      { field: "appStatus", header: "Status" }
    ];

    this.urls = [
      {
        appCode: "abc",
        appGroup: "abcgroup",
        appUrl: "http://abc.com",
        appStatus: "200"
      },
      {
        appCode: "cde",
        appGroup: "cdegroup",
        appUrl: "http://google.com",
        appStatus: "-1"
      },
      {
        appCode: "xyz",
        appGroup: "xyzgroup",
        appUrl: "http://googli.com",
        appStatus: "403"
      }
    ];
  }

  onRowSelect(event) {
    console.log("select");
    console.log(event);
  }

  onRowUnselect(event) {
    console.log("Unselect");
    console.log(event);
  }
}
