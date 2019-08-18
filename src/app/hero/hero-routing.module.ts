import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HerosComponent } from "./heros/heros.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/hero/dashboard",
    pathMatch: "full"
  },
  // {
  //   path: "",
  //   component: HomeComponent
  // },
  {
    path: "heroes",
    component: HerosComponent
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
