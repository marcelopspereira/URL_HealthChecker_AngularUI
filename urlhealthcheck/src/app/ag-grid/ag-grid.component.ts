import { Component, OnInit, ViewChild } from '@angular/core';
import { CellRendererComponent } from '../cell-renderer/cell-renderer.component';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  private gridApi:any;
  private gridColumnApi;
  private defaultColDef;
  private context;
  frameworkComponents;
  //private components;
  columnDefs: any[];
  rowData: any[];
 
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
      { car:'Forda',make: 'Toyota', model: 'Celica vnbvhhhg hjfghhf', price: 35000 },
      { car:'Toyota',make: 'Ford', model: 'Mondeo', price: 32000 },
      { car:'Ford',make: 'Porsche', model: 'Boxter', price: 72000 },
      { car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 },
      { car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 },
      { car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 },
      { car:'Ford',make: 'Toyota', model: 'Celica', price: 35000 },
      { car:'Ford',make: 'Ford', model: 'Mondeo', price: 32000 }
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

  methodFromParentEditCancel() {
    this.gridApi.stopEditing(true);
  }

  methodFromParentEditSave() {
    var cellDefs = this.gridApi.getEditingCells();
    cellDefs.forEach( function(cellDef) {
    console.log(cellDef);
    console.log(cellDef.rowIndex);
    console.log(cellDef.column.getId());
    console.log(cellDef.floating);
      });
  
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