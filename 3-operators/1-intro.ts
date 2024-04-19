import { map, of } from 'rxjs'

of(1, 2, 3) // creation operator
    .pipe(map((x) => x + 2)) // pipeable operator
    .subscribe((v) => console.log(v))
