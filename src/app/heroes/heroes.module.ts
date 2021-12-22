import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HeroStoreEffects } from '../store/reducers/hero/hero.effects';
import { heroReducer } from '../store/reducers/hero/hero.reducers';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('heroStore', heroReducer),
    EffectsModule.forFeature([HeroStoreEffects])
  ]
})
export class HeroesModule { }
