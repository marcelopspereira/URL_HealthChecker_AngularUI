import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VoterparentComponent } from "./voterparent/voterparent.component";
import { URLAppMainComponent } from "./urlapp-main/urlapp-main.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/Home" },
  { path: "Home", component: HomeComponent },
  { path: "Vote", component: VoterparentComponent },
  { path: "URL", component: URLAppMainComponent },
  { path: "About", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
