import { Observable } from 'rxjs'
import { sectionBreak } from '../global'

const observable = new Observable<number>((subscriber) => {
    console.log('hello')
    subscriber.next(10)
})

// independent execution
observable.subscribe((x) => console.log(x ** 2))
observable.subscribe((x) => console.log(x ** 2))

sectionBreak()

const observable2 = new Observable((subscriber) => {
    console.log('hello')
    subscriber.next(1)
    setTimeout(() => {
        subscriber.next(2)
    }, 1000)
})
// can return values over time
console.log('before')
observable2.subscribe((x) => console.log(x))
console.log('after')
