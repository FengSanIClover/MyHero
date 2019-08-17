import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Hero } from "../../models/hero";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HEROES } from "../../mocks/mock-heroes";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  heroes = HEROES;
  selectedHero: Hero;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      heroName: [""]
    });
  }

  ngAfterViewInit(): void {
    this.form.get("heroName").valueChanges.subscribe(val => {
      this.selectedHero.name = val;
    });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;

    // 要擺放在後面，否則會報錯
    this.form.get("heroName").setValue(hero.name);
  }
}
