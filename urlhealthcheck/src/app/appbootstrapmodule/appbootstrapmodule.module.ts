import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**primeng related imports */
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    TableModule
    
  ],
  exports:[ToastModule,
    ButtonModule,
    TableModule
    
  ]
})
export class AppbootstrapmoduleModule { }
