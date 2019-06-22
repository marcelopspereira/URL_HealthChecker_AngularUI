import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**primeng related imports */
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule
    
  ],
  exports:[ToastModule,
    ButtonModule
  ]
})
export class AppbootstrapmoduleModule { }
