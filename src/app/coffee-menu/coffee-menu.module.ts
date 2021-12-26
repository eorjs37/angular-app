import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromCoffee from './state/coffee.reducer';
import { CoffeeMenuComponent } from './coffee-menu.component';
import { CoffeeSelectedComponent } from './coffee-selected/coffee-selected.component';
import { RouterModule } from '@angular/router';
import { AddCoffeeMenuComponent } from './add-coffee-menu/add-coffee-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CoffeeMenuComponent, CoffeeSelectedComponent, AddCoffeeMenuComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('coffee', fromCoffee.coffeeReducer),
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CoffeeMenuComponent,
    CoffeeSelectedComponent
  ]
})
export class CoffeeMenuModule { }
