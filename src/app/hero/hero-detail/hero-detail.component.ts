import { Hero } from "./../../models/hero";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../../services/hero.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit, AfterViewInit {
  // @Input() form: FormGroup;
  // @Input() hero: Hero;
  form: FormGroup;
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      heroName: [""]
    });
    this.GetHero();
  }

  ngAfterViewInit(): void {
    this.form.get("heroName").valueChanges.subscribe(val => {
      this.hero.name = val;
    });
  }

  GetHero() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.form.get("heroName").setValue(hero.name);
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.heroService.updateHero(this.hero);
    this.goBack();
  }
}
