import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**primeng related imports */
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    TableModule,
    CardModule,
    DropdownModule,
    TooltipModule
    
  ],
  exports:[ToastModule,
    ButtonModule,
    TableModule,
    CardModule,
    DropdownModule
    
  ]
})
export class AppbootstrapmoduleModule { }
