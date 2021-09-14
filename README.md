# Observable 사용법

```typescript
import { Observable, of } from 'rxjs';

/* 메소드 */
getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
}
```