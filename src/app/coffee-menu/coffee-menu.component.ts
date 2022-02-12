import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coffee } from '../models/coffee';
import { Collections } from '../models/collections';
import { beforeLoadCoffee ,addCoffeeCollections, removeCoffeeCollections } from './state/coffee.actions';
import { selectCoffees, selectCollections, selectCollectionsSum } from './state/coffee.selectors';
import { TimerService } from '../service/timer.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-coffee-menu',
  templateUrl: './coffee-menu.component.html',
  styleUrls: ['./coffee-menu.component.css']
})
export class CoffeeMenuComponent implements OnInit {
  coffees$ = this.store.select(selectCoffees);
  coffeeCollection$ = this.store.select(selectCollections);
  total$ = this.store.select(selectCollectionsSum);
  totalMoney: number = 0;

  parentIsModal: boolean = false;
  counter: number = 0;
  source$: any;
  $timer: Observable<number>;
  isAlert: boolean = false;

  constructor(private store: Store,
              private cd: ChangeDetectorRef,
              private timerService: TimerService) {
    this.store.dispatch(beforeLoadCoffee());
    
  }

  ngOnInit(): void {
    this.total$.subscribe((money) => {
      this.totalMoney = money;
    })
  }

  startCounter() {
    this.$timer = this.timerService.timerStartCounter();
  }

  stopConter() {
    this.timerService.timerStopCounter();
  }

  addCoffee(coffee: Coffee) {
    this.store.dispatch(addCoffeeCollections({ coffee }));
    
    this.cd.detectChanges();
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

  closeModal() {
    this.parentIsModal = false;
  }

  open() {
    if (this.totalMoney > 0) {
      this.parentIsModal = true;
    } else {
      if (!this.isAlert) {
        this.isAlert = true;
        setTimeout(() => {
          this.isAlert = false;
        }, 2000)
      }
    }
    
  }
}
