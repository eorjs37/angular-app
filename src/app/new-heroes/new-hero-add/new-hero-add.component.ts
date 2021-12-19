import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewHeroRequest } from '../state/newHeroes.actions';
import { Hero } from 'src/app/models/hero';
@Component({
  selector: 'app-new-hero-add',
  templateUrl: './new-hero-add.component.html',
  styleUrls: ['./new-hero-add.component.css']
})
export class NewHeroAddComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  add() {
    const hero = {
      id: 21,
      name: '블라블라'
    }
    this.store.dispatch(addNewHeroRequest({ hero }));
  }
}
