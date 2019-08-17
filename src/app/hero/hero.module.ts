import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroRoutingModule } from "./hero-routing.module";
import { HerosComponent } from "./heros/heros.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [HerosComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HeroModule {}
