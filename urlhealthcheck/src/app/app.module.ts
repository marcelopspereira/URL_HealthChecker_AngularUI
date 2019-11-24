import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VoterparentComponent } from './voterparent/voterparent.component';
import { VotechildComponent } from './votechild/votechild.component';
import { AppbootstrapmoduleModule } from './appbootstrapmodule/appbootstrapmodule.module';
import { HomeComponent } from './home/home.component';
import { URLAppMainComponent } from './urlapp-main/urlapp-main.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellRendererComponent } from './cell-renderer/cell-renderer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartComponent } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
 
    HeaderComponent,
    VoterparentComponent,
    VotechildComponent,
    HomeComponent,
    URLAppMainComponent,
    AgGridComponent,
    CellRendererComponent,
    HighchartsChartComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppbootstrapmoduleModule,
    AgGridModule.withComponents([CellRendererComponent]),
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
