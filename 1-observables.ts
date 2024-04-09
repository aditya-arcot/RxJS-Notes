import { Observable, first, from } from 'rxjs'
import { sectionBreak } from './global'

sectionBreak()

const observable = new Observable<number>((subscriber) => {
    console.log('hello')
    subscriber.next(10)
})
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
console.log('before')
observable2.subscribe((x) => console.log(x))
console.log('after')

sectionBreak()

const observable3 = new Observable(function subscribe(subscriber) {
    try {
        subscriber.next(1)
        subscriber.next(2)
        subscriber.complete()
    } catch (err) {
        subscriber.error(err)
    }
})
observable3.subscribe((x) => console.log(x))

sectionBreak()

const observable4 = from([10, 20, 30])
const sub = observable4.subscribe((x) => console.log(x))
sub.unsubscribe()

sectionBreak()

const observable5 = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
        subscriber.next('hi')
    }, 1000)
    return function unsubscribe() {
        clearInterval(id)
    }
})
const sub2 = observable5.subscribe((x) => console.log(x))
setTimeout(() => sub2.unsubscribe(), 3500)
