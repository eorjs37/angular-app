import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHeroes,newHeroesFeatureSelector2 } from '../state/newHeroes.selector';
import { loadHeroesRequest,updateNewHero } from '../state/newHeroes.actions';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';
@Component({
  selector: 'app-new-hero-list',
  templateUrl: './new-hero-list.component.html',
  styleUrls: ['./new-hero-list.component.css']
})
export class NewHeroListComponent implements OnInit {
  public newHero$!: Observable<Hero[]>;
  newHero2$ = this.store.select(newHeroesFeatureSelector2)
  constructor(private store: Store) {
    this.store.dispatch(loadHeroesRequest());
    this.newHero$ = this.store.select(getHeroes);

    this.newHero2$.subscribe((data) => {
      console.log('data : ' , data);
      
    })
  }

  ngOnInit(): void {
  }

  selectedNewHero(hero: Hero) {
    this.store.dispatch(updateNewHero({ hero }));
  }

}
