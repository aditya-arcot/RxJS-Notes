import { Observable } from 'rxjs'
import { sectionBreak } from '../global'

// next*(error|complete)?
const observable = new Observable(function subscribe(subscriber) {
    try {
        subscriber.next(1)
        subscriber.next(2)
        subscriber.complete()
    } catch (err) {
        subscriber.error(err)
    }
})
observable.subscribe((x) => console.log(x))

sectionBreak()

const observable2 = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
        subscriber.next('hi')
    }, 100)
    return function unsubscribe() {
        clearInterval(id)
    }
})
// disposing
const sub = observable2.subscribe((x) => console.log(x))
setTimeout(() => sub.unsubscribe(), 250)
