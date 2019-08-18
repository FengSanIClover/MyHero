import { Hero } from "./../../models/hero";
import { FormGroup } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() hero: Hero;
  constructor() {}

  ngOnInit() {}
}
