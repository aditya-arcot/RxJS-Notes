import { Observable } from 'rxjs'
import { sectionBreak } from './global'

const throwError = Math.random() < 0.5

const observable = new Observable<number>(function subscribe(subscriber) {
    try {
        subscriber.next(1)
        if (throwError) {
            throw new Error('test error')
        }
        subscriber.next(2)
        subscriber.complete()
    } catch (err) {
        subscriber.error(err)
    }
})

// 3 optional callbacks
const observer = {
    next: (x: number) => console.log(x),
    error: (err: Error) => console.log(err.message),
    complete: () => console.log('complete'),
}

observable.subscribe(observer)

sectionBreak()

// no complete callback
const observer2 = {
    next: (x: number) => console.log(x),
    error: (err: Error) => console.log(err.message),
}
observable.subscribe(observer2)

sectionBreak()

// only next callback
// error unhandled
observable.subscribe((x) => console.log(x))
