import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';
import { addCoffee } from '../state/coffee.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-coffee-menu',
  templateUrl: './add-coffee-menu.component.html',
  styleUrls: ['./add-coffee-menu.component.css']
})
export class AddCoffeeMenuComponent implements OnInit {
  menunm!: string;
  price: number = 0;
  coffeeForm = new FormGroup({
    coffeeMenuNm: new FormControl('',Validators.required),
    coffeePrice: new FormControl(0,Validators.required),
  })
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  add() {
    const coffee: Coffee = {
      menuNm: this.menunm,
      price: this.price
    }
    this.store.dispatch(addCoffee({ coffee }));

    this.menunm = '';
    this.price = 0;
  }

  onSubmit() {
    // TODO: EventEmitter로 폼 내용 보내기
    if (this.coffeeForm.valid) {
      const coffee: Coffee = {
        menuNm: this.coffeeForm.value.coffeeMenuNm,
        price: this.coffeeForm.value.coffeePrice
      }
      this.store.dispatch(addCoffee({ coffee }));
    } else {
      alert('필수 값을 입력해주세요.')
    }
  }

}
