import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './state/coffee.effects';
import { DesertEffects } from './state/desert.effects';
import * as fromCoffee from './state/coffee.reducer';
import * as fromDesert from './state/desert.reducer';
import { CoffeeMenuComponent } from './coffee-menu.component';
import { CoffeeSelectedComponent } from './coffee-selected/coffee-selected.component';
import { RouterModule } from '@angular/router';
import { AddCoffeeMenuComponent } from './add-coffee-menu/add-coffee-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../component/modal/modal.component';
import { PipesModule } from '../pipes/pipes.module';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CoffeeMenuComponent, CoffeeSelectedComponent, AddCoffeeMenuComponent, ModalComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('coffee', fromCoffee.coffeeReducer),
    StoreModule.forFeature('desert', fromDesert.desertReducer),
    EffectsModule.forFeature([CoffeeEffects,DesertEffects]),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [
    CoffeeMenuComponent,
    CoffeeSelectedComponent,
    ModalComponent
  ]
})
export class CoffeeMenuModule { }
