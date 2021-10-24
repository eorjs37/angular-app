# Angular 공부 내용 정리

## Service 
> 서비스를 사용하는 이유는 컴퍼넌트에서 직접 데이터를 통신하는 것은 Angualr에서 권고 하지 않는 방식이다. 데이터를 처리하는 로직는 서비스에서 하는게 좋다.

### Service 생성 명령어
```javascript
ng generate service hero
```


### HeroService에서 getHeroes생성
```javascript
getHeroes(): Observable<Hero[]>{
    return 'return 할 결과'
}
```

### 컴퍼넌트에서 Import
```javascript
import { HeroService } from '../hero.service';
```

### Hero 컴퍼넌트에서 사용
> Hero 컴퍼넌트의 constructor안에 의존성 주입을 한다.

```javascript
constructor(private heroService: HeroService) { }
```

> Hero 컴퍼넌트의 함수 안에 heroService의 함수를 호출한다.
 아래 예제는 예시입니다. 

```javascript
getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}
```
## Routing
> ng new routing-app --routing 를 입력 후 routing 설치

### 사용하고자 하는 컴퍼넌트 생성
```javascript
ng generate component 생성하고자 하는 컴퍼넌트 생성
```

### app-routing.module.ts에 import
```typescript
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];
```

## Interface 생성
> Java에서는 Interface를 통해 추상화 하고, Class에서 이것을 구체화하는 작업니다. Typescript에서도 비슷한 기능을 한다고 생각한다. Interface를 통해 추상화하고 Class에서 구체화 시키는 작업을 한다고 생각한다.

### Interface 생성 명령어
```Angular
ng generate service <서비스명>
```

### Interface 구조
```typescript

export interface <인터페이스명> {
    id: number;
    password: string;
    email:string;
}

```

### Service에 Interface적용
```typescript
import { Injectable } from '@angular/core';
import { Daegeon } from './daegeon'; // Interface
import { DAEGEON } from './mock-daegeon'; // mock 데이터
@Injectable({
  providedIn: 'root'
})
export class DaegeonServiceService {
  constructor() { }
  /**
   * return 타입은 Daegeon이라는 Interface로 받는다.
   * */
  getHeroes(): Daegeon[]{
    return DAEGEON;
  }
}

```