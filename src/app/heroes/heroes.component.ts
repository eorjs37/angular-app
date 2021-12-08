import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadHeroesRequestAction,loadHeroesSuccessAction } from '../store/reducers/hero/hero.actions';
import { getHeroes } from '../store/reducers/hero/hero.selectors';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heores$!: Observable<Hero[]>;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,  private messageService: MessageService, private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(loadHeroesRequestAction());
    this.store$.select(getHeroes).subscribe(heroStore => {
      console.log('heroStore : ' , heroStore);
      
      this.heores$ = of(heroStore);
    });
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
