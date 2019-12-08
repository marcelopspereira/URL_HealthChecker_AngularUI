import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VoterparentComponent } from "./voterparent/voterparent.component";
import { URLAppMainComponent } from "./urlapp-main/urlapp-main.component";
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: "", pathMatch: "full", redirectTo: "/Login" },
  { path: "Login",component: LoginComponent },
  { path: "Home", component: HomeComponent },
  { path: "Vote", component: VoterparentComponent },
  { path: "URL", component: URLAppMainComponent },
  { path: "AGGRID", component: AgGridComponent },
  { path: "About", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
