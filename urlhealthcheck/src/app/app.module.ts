import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VoterparentComponent } from './voterparent/voterparent.component';
import { VotechildComponent } from './votechild/votechild.component';
import { AppbootstrapmoduleModule } from './appbootstrapmodule/appbootstrapmodule.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VoterparentComponent,
    VotechildComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppbootstrapmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
