import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
class Coffees{
  constructor(public id: number, public menuNm: string, public price: number) {}
}

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})  
export class AddMenuComponent implements OnInit {
  model = new Coffees(-1, '', 0);
  constructor() {

  }

  ngOnInit(): void {
  }

  newCoffee() {
    this.model = new Coffees(-1, '', 0);
  }

  onSubmit(coffeeForm: NgForm) {
    console.log(coffeeForm);
    
  }
}
