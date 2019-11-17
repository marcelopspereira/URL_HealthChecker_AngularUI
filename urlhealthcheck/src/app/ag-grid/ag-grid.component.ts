import { Component, OnInit, ViewChild } from '@angular/core';
import { CellRendererComponent } from '../cell-renderer/cell-renderer.component';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  private gridApi:any;
  private tempSelectedRow:string;
  private tempRowNode:any;
  private gridColumnApi;
  private defaultColDef;
  private context;
  frameworkComponents;
  //private components;
  columnDefs: any[];
  rowData: any[];
  isSave:boolean=false;
 
  dropdownval:any[]=["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"];

  constructor() { 
    this.columnDefs = [
      {headerName: 'Action', field: 'value', colId: "params",cellRenderer: "cellRendererComponent" ,editable: false},
      {
        headerName: "Cars",
      field: "car",
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: this.dropdownval
      }
    },
      {headerName: 'Make',  field: 'make' ,editable: true,sortable: true, filter: true},
      {headerName: 'Model', field: 'model',editable: true,sortable: true, filter: true },
      {headerName: 'Price', field: 'price',editable: true, sortable: true, filter: true}
  ];

  this.rowData = [
      { id:1,car:'Forda',make: 'Toyota', model: 'Celica vnbvhhhg hjfghhf', price: 35000 },
      { id:2,car:'Toyota',make: 'Ford', model: 'Mondeo', price: 32000 },
      { id:3,car:'Ford',make: 'Porsche', model: 'Boxter', price: 72000 },
      { id:4,car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { id:5,car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 },
      { id:6,car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { id:7,car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 },
      { id:8,car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { id:9,car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 },
      { id:10,car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { id:11,car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 }
  ];


  this.defaultColDef = {
    editable: true,
    resizable: true
    
   // cellRenderer: "singleClickEditRenderer"
  };

  this.context = { componentParent: this };

  this.frameworkComponents = {
    cellRendererComponent: CellRendererComponent
  };
 // this.components = { singleClickEditRenderer: getRenderer() };

  }

  ngOnInit() {
  }

  title = 'app';

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  methodFromParentEditStart(row:any,cell:any) {
    //alert("Parent Component Method from " + row + "!"+cell);
    var startEditingParams = {
            rowIndex: row,
            colKey: cell
          };
          this.gridApi.startEditingCell(startEditingParams);
          
  }

  methodFromParentEditCancel(flag:boolean) {
    this.gridApi.stopEditing(flag);
  }

  methodFromParentEditSave() {

    this.isSave=true;
    var cellDefs = this.gridApi.getEditingCells();
    const rowNodeToSave=this.gridApi.getRowNode(cellDefs[0].rowIndex);
  
    //call backend to store new values in db

    //end
    this.methodFromParentEditCancel(false);
    console.log("....methodfromparenteditsave")
    console.log(rowNodeToSave);
  }

  rowEditStart(event)
  {
    this.tempSelectedRow=JSON.stringify(event.data);
    var cellDefs = this.gridApi.getEditingCells();
    this.tempRowNode=this.gridApi.getRowNode(cellDefs[0].rowIndex);

    console.log(this.tempSelectedRow);
    console.log(this.tempRowNode);
  }

  rowEditStopped(event)
  {
    
    if(this.isSave)
    {
      console.log("logic is written in methodFromParentEditSave()");
      
    }
    else{
      console.log(event);
      console.log("Save button is not clicked, hence restore old values");
      
      console.log(this.tempSelectedRow);
      console.log(this.tempRowNode);

      this.tempRowNode.setData(JSON.parse(this.tempSelectedRow));
      this.tempRowNode=null;//setting null for fresh start
      this.methodFromParentEditCancel(true);
    }
    //after processing set the default value i.e. false to isSave
    this.isSave=false;
  }

  

  
}



// function getRenderer() {
//   function CellRenderer() {}
//   CellRenderer.prototype.createGui = function() {
//     var template ='span>button.custombutton{cursor:pointer;background-color:rgb(3, 44, 82);background-repeat:no-repeat;padding:2px 5px 2px 5px;text-transform: uppercase;font-size:13px;font-family: "FuturaMedium", Fallback, sans-serif;border:0;letter-spacing:0.7px;color:whitesmoke;}  <span><button class="custombutton" id="theButton">Edit</button></span>';
//     var tempDiv = document.createElement("div");
//     tempDiv.innerHTML = template;
//     this.eGui = tempDiv.firstElementChild;
//   };
//   CellRenderer.prototype.init = function(params) {
//     this.createGui();
//     this.params = params;
//      this.eButton = this.eGui.querySelector("#theButton");
    
//     this.buttonClickListener = this.onButtonClicked.bind(this);
//     this.eButton.addEventListener("click", this.buttonClickListener);
//   };
//   CellRenderer.prototype.onButtonClicked = function() {
//     var startEditingParams = {
//       rowIndex: this.params.rowIndex,
//       colKey: this.params.column.getId()
//     };
//     this.params.api.startEditingCell(startEditingParams);
//   };
//   CellRenderer.prototype.getGui = function() {
//     return this.eGui;
//   };
//   CellRenderer.prototype.destroy = function() {
//     this.eButton.removeEventListener("click", this.buttonClickListener);
//   };
//   return CellRenderer;
// }