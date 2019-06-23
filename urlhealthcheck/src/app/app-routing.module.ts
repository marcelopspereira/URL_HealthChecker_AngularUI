import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoterparentComponent } from './voterparent/voterparent.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/Home" },
  { path: "Home", component: HomeComponent },
  { path: "Vote", component: VoterparentComponent },
  { path: "About", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
