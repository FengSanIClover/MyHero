import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Hero } from "../../models/hero";
import { FormBuilder, FormGroup } from "@angular/forms";

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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      heroName: [""]
    });
  }

  ngAfterViewInit(): void {
    this.form.get("heroName").valueChanges.subscribe(val => {
      this.hero.name = val;
    });
  }
}
