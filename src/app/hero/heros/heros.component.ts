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
    this.heroes$ = this.heroService.getHeroes();
    // this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.heroService.getHeroes();
  }

  add(heroName: string) {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }

    this.heroService.addHero(heroName);
  }

  delete(hero: Hero) {
    this.heroService.deleteHero(hero);
  }
}
