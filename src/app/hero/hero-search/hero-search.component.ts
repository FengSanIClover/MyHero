import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import {
  debounceTime,
  switchMap,
  mergeMap,
  filter,
  toArray,
  map,
  distinctUntilChanged
} from "rxjs/operators";
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../models/hero";
import { combineLatest, Observable } from "rxjs";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"]
})
export class HeroSearchComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private heroService: HeroService) {}
  heroes$: Observable<Hero[]>;
  ngOnInit() {
    this.form = this.fb.group({
      heroName: [""]
    });
  }

  ngAfterViewInit(): void {
    const search$ = this.form.get("heroName").valueChanges;

    // this.heroes$ = search$.pipe(
    //   debounceTime(200),
    //   switchMap(val =>
    //     this.heroService.searchHero().pipe(
    //       mergeMap(p => p),
    //       filter(x => {
    //         if (val) {
    //           return x.name.includes(val);
    //         }
    //       }),
    //       toArray()
    //     )
    //   )
    // );

    this.heroes$ = combineLatest(
      search$.pipe(
        debounceTime(200),
        distinctUntilChanged()
      ),
      this.heroService.searchHero()
    ).pipe(
      map(([keyword, vals]) =>
        vals.filter(x => {
          if (keyword) {
            return x.name.includes(keyword);
          }
        })
      )
    );
  }

  hasKeyword = (keyWord: string) => {
    if (keyWord.trim()) {
      return (hero: Hero) => hero.name.indexOf(keyWord) > -1;
    }
  };
}
