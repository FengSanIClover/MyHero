import { Injectable, Inject } from "@angular/core";
import { Hero } from "../models/hero";
import { HEROES } from "../mocks/mock-heroes";
import { Observable, of, throwError, ReplaySubject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  heros: Hero[] = [];
  hero$ = new ReplaySubject<Hero[]>(1);
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient,
    @Inject("api") private api: string
  ) {
    this.Init();
  }

  Init() {
    this.httpClient
      .get<Hero[]>(`${this.api}/heroes`)
      .pipe(
        tap(_ => this.log("fetched heroes")),
        catchError(this.handleError<Hero[]>(`getHeroes`, []))
      )
      .subscribe(res => {
        this.heros = res;
        this.hero$.next(res);
      });
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    // return of(this.heros);
    // return this.httpClient.get<Hero[]>(`${this.api}/heroes`).pipe(
    //   tap(_ => this.log("fetched heroes")),
    //   catchError(this.handleError<Hero[]>(`getHeroes`, []))
    // );
    return this.hero$.asObservable();
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    return this.httpClient.get<Hero>(`${this.api}/heroes/${id}`);
  }

  updateHero(hero: Hero) {
    this.httpClient
      .put(`${this.api}/heroes/${hero.id}`, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>("updateHero"))
      )
      .subscribe(res => {
        const index = this.heros.findIndex(x => x.id === hero.id);
        this.heros.splice(index, 1, hero);
        this.hero$.next(this.heros);
      });
  }

  addHero(heroName: string) {
    const newHero = {
      id: Math.max(0, ...this.heros.map(h => h.id)) + 1,
      name: heroName
    };
    this.httpClient
      .post(`${this.api}/heroes/`, newHero)
      .pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>("addHero"))
      )
      .subscribe(res => {
        this.heros.push(newHero);
        this.hero$.next(this.heros);
      });
  }

  deleteHero(hero: Hero) {
    this.httpClient
      .delete(`${this.api}/heroes/${hero.id}`)
      .pipe(
        tap(_ => this.log(`deleted hero id=${hero.id}`)),
        catchError(this.handleError<Hero>("deleteHero"))
      )
      .subscribe(res => {
        const index = this.heros.findIndex(x => x.id === hero.id);
        this.heros.splice(index, 1);
        this.hero$.next(this.heros);
      });
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
