import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-cell-renderer',
  templateUrl: './cell-renderer.component.html',
  styleUrls: ['./cell-renderer.component.css']
})
export class CellRendererComponent implements ICellRendererAngularComp {

  public params: any;

  refresh(params: any): boolean {
    return false;
  }
  agInit(params: any): void {
    this.params = params;
  }

  public invokeEditStart() {
    this.params.context.componentParent.methodFromParentEditStart( `${this.params.node.rowIndex}`, `${this.params.column.getId()}`);
}

public invokeEditCancel() {
  this.params.context.componentParent.methodFromParentEditCancel();
}

public invokeEditSave() {
  this.params.context.componentParent.methodFromParentEditSave();
}
 

  constructor() { }

  ngOnInit() {
  }

}
