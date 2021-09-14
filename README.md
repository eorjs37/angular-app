# Observable 사용법

```typescript
import { Observable, of } from 'rxjs';

/* 메소드 */
getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
}
```


# routing 추가

> 명령어
> ng generate module app-routing --flat --module=app

