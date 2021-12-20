import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNewHeroes from './state/newHeroes.reducer';
import { NewHeroEffect } from './state/newHeroes.effects';
import { EffectsModule } from '@ngrx/effects';
import { NewHeroesComponent } from './new-heroes.component';
import { NewHeroListComponent } from './new-hero-list/new-hero-list.component';
import { NewHeroAddComponent } from './new-hero-add/new-hero-add.component';
@NgModule({
  declarations: [NewHeroesComponent, NewHeroListComponent, NewHeroAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('newHero', fromNewHeroes.reducer),
    EffectsModule.forFeature([NewHeroEffect])
  ],
  providers: [],
})
export class NewHeroesModule { }
