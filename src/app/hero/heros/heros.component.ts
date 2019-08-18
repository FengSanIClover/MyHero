import { Component, OnInit } from "@angular/core";
import { Hero } from "../../models/hero";
import { HEROES } from "../../mocks/mock-heroes";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
  heroes$: any;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.heroService.getHeroes();
  }
}
