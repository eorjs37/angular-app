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