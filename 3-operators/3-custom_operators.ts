import { filter, interval, map, of, pipe, take } from 'rxjs'

function discardOddDoubleEven() {
    return pipe(
        filter((v: number) => !(v % 2)),
        map((v) => 2 * v)
    )
}
const observable = interval(5).pipe(take(5), discardOddDoubleEven())

observable.subscribe((x) => console.log(x))
