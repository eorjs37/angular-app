import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const courses = [
      { id: "1", name: 'Dr Nice1', description:'1' },
      { id: "2", name: 'Dr Nice2', description:'2' },
      { id: "3", name: 'Dr Nice3', description:'3' },
      { id: "4", name: 'Dr Nice4', description:'4' },
      { id: "5", name: 'Dr Nice5', description:'5' },
      { id: "6", name: 'Dr Nice6', description:'6' },
      { id: "7", name: 'Dr Nice7', description:'7' },
    ]


    const coffees = [
       { id: 1, menuNm: '아메리카노', price: 1500 },
       { id: 2, menuNm: '카페라떼', price: 3000 },
       { id: 3, menuNm: '녹차라떼', price: 3000 },
    ]

    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const desert = [
       { id: 11, menuNm: '던킨더넛츠', price: 6000 },
       { id: 22, menuNm: '초콜렛생크림', price: 6000 },
       { id: 33, menuNm: '카스테라', price: 3000 },
    ]
    return {courses,coffees,heroes,desert}
  }
  constructor() { }
}
