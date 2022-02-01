import { Component, OnInit } from '@angular/core';
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
    console.log('model : ' , this.model);
    
  }

}
