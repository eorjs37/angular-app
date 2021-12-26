import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coffee } from '../models/coffee';
import { Collections } from '../models/collections';
import { ApiService } from '../service/api.service';
import { loadCoffeeRequest, addCoffeeCollections, removeCoffeeCollections } from './state/coffee.actions';
import { selectCoffees, selectCollections, selectCollectionsSum } from './state/coffee.selectors';
@Component({
  selector: 'app-coffee-menu',
  templateUrl: './coffee-menu.component.html',
  styleUrls: ['./coffee-menu.component.css']
})
export class CoffeeMenuComponent implements OnInit {
  coffees$ = this.store.select(selectCoffees);
  coffeeCollection$ = this.store.select(selectCollections);
  total$ = this.store.select(selectCollectionsSum);
  constructor(private apiService: ApiService,private store: Store) {
    this.apiService.getCoffeeList().subscribe(coffees => {
      this.store.dispatch(loadCoffeeRequest({ coffees }));
    })
  }

  ngOnInit(): void {
  }

  addCoffee(coffee: Coffee) {
    this.store.dispatch(addCoffeeCollections({ coffee }));
  }

  plusCalCoffee(collection: Collections) {
    const newCoffee: Coffee = {
      id: collection.id,
      menuNm: collection.menuNm,
      price: (collection.totalPrice)/(collection.quantity)
    }
    this.store.dispatch(addCoffeeCollections({ coffee: newCoffee }));
  }

  minusCalCoffee(collection: Collections) {
    const newCoffee: Coffee = {
      id: collection.id,
      menuNm: collection.menuNm,
      price: (collection.totalPrice)/(collection.quantity)
    }
    this.store.dispatch(removeCoffeeCollections({ coffee: newCoffee }));
  }
}
