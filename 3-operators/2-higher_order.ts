import { concat, concatAll, interval, map, mergeAll, of, take } from 'rxjs'

// higher order observable
const observable = of(
    // 1-3
    interval(5).pipe(
        take(2),
        map((x) => x + 1)
    ),
    // 4-6
    interval(5).pipe(
        take(2),
        map((x) => x + 3)
    )
)

// inner observables are subscribed to one at a time
const concatObserver = observable.pipe(concatAll())
// all inner observables are subscribed to at the same time
const mergeObserver = observable.pipe(mergeAll())

concat(of('concat'), concatObserver, of('merge'), mergeObserver).subscribe(
    (val: number | string) => console.log(val)
)
