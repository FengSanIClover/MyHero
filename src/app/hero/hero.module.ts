import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroRoutingModule } from "./hero-routing.module";
import { HerosComponent } from "./heros/heros.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [HerosComponent, HeroDetailComponent, MessagesComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HeroModule {}
