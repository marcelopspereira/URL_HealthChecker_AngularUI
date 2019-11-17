import { Component, OnInit, ViewChild } from "@angular/core";
import { CellRendererComponent } from "../cell-renderer/cell-renderer.component";

@Component({
  selector: "app-ag-grid",
  templateUrl: "./ag-grid.component.html",
  styleUrls: ["./ag-grid.component.css"]
})
export class AgGridComponent implements OnInit {
  private gridApi: any;
  private tempSelectedRow: string;
  private tempRowNode: any;
  private gridColumnApi;
  private defaultColDef;
  private context;
  frameworkComponents;
  //private components;
  columnDefs: any[];
  rowData: any[];
  isSave: boolean = false;

  dropdownval: any[] = ["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"];

  constructor() {
    this.columnDefs = [
      {
        headerName: "Action",
        field: "value",
        colId: "params",
        cellRenderer: "cellRendererComponent",
        editable: false
      },
      {
        headerName: "Cars",
        field: "car",
        editable: true,
        cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          values: this.dropdownval
        }
      },
      {
        headerName: "Make",
        field: "make",
        editable: true,
        sortable: true,
        filter: true
      },
      {
        headerName: "Model",
        field: "model",
        editable: true,
        sortable: true,
        filter: true
      },
      {
        headerName: "Price",
        field: "price",
        editable: true,
        sortable: true,
        filter: true
      }
    ];

    this.rowData = [
      {
        id: 1,
        car: "Forda",
        make: "Toyota",
        model: "Celica vnbvhhhg hjfghhf",
        price: 35000
      },
      { id: 2, car: "Toyota", make: "Ford", model: "Mondeo", price: 32000 },
      { id: 3, car: "Ford", make: "Porsche", model: "Boxter", price: 72000 },
      { id: 4, car: "Ford", make: "Toyota", model: "Celica", price: 35000 },
      { id: 5, car: "Ford", make: "Ford", model: "Mondeo", price: 32000 },
      { id: 6, car: "Ford", make: "Toyota", model: "Celica", price: 35000 },
      { id: 7, car: "Ford", make: "Ford", model: "Mondeo", price: 32000 },
      { id: 8, car: "Ford", make: "Toyota", model: "Celica", price: 35000 },
      { id: 9, car: "Ford", make: "Ford", model: "Mondeo", price: 32000 },
      { id: 10, car: "Ford", make: "Toyota", model: "Celica", price: 35000 },
      { id: 11, car: "Ford", make: "Ford", model: "Mondeo", price: 32000 }
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

  ngOnInit() {}

  title = "app";

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  methodFromParentEditStart(row: any, cell: any) {
    console.log("start edit method called");
    //close any open edits available
    //this.gridApi.stopEditing(true);
    setTimeout(() => {
      var startEditingParams = {
        rowIndex: row,
        colKey: cell
      };
      this.gridApi.startEditingCell(startEditingParams);
    }, 100);
  }

  methodFromParentEditCancel(flag: boolean) {
    this.gridApi.stopEditing(flag);
  }

  methodFromParentEditSave() {
    var cellDefs = this.gridApi.getEditingCells();

    //console.log(cellDefs.length);
    /*without opening edit mode if clicking on save
      that cause error, so prevent that need to check if cell is 
      opened for edit or not*/
    if (cellDefs.length !== 0) {
      const rowNodeToSave = this.gridApi.getRowNode(cellDefs[0].rowIndex);

      /*check if edit row and the save button clicked row are same or not*/
      if (this.tempRowNode.data.id === rowNodeToSave.data.id) {
        this.isSave = true;
        console.log("backend logic to save data in DB");
        //call backend to store new values in db

        //end
        this.methodFromParentEditCancel(false);
        console.log("....methodfromparenteditsave");
        console.log(rowNodeToSave);
      }
    }
  }

  rowEditStart(event) {
    console.log("rowEditStart event");
    this.tempSelectedRow = JSON.stringify(event.data);
    var cellDefs = this.gridApi.getEditingCells();
    this.tempRowNode = this.gridApi.getRowNode(cellDefs[0].rowIndex);

    console.log(this.tempSelectedRow);
    console.log(this.tempRowNode);
  }

  rowEditStopped(event) {
    if (!this.isSave) {
      console.log(event);
      console.log("Save button is not clicked, hence restore old values");

      console.log(this.tempSelectedRow);
      console.log(this.tempRowNode);

      this.tempRowNode.setData(JSON.parse(this.tempSelectedRow));
      this.tempRowNode = null; //setting null for fresh start
      this.methodFromParentEditCancel(true);
    }
    //after processing set the default value i.e. false to isSave
    this.isSave = false;
  }

addNewRow()
{
  
    var newItem = {};
    var res = this.gridApi.updateRowData({
      add: [newItem],
      addIndex: 0
    });
    console.log(res);
  
}



}

