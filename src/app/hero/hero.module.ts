import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [HerosComponent],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
