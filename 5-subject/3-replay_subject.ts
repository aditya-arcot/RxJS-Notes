import { ReplaySubject } from 'rxjs'
import { sectionBreak } from '../global'

// buffer size - 2
const subject = new ReplaySubject(2)

subject.subscribe((x) => console.log(1, x))

subject.next(1)
subject.next(2)
subject.next(3)

subject.subscribe((x) => console.log(2, x))

subject.next(4)

sectionBreak()

// buffer size - 10, window time - 250ms
const subject2 = new ReplaySubject(10, 250)

subject2.subscribe((x) => console.log(1, x))

let i = 1
const interval = setInterval(() => {
    subject2.next(i++)
    if (i > 5) {
        clearInterval(interval)
    }
}, 100)

setTimeout(() => {
    // receives values within buffer and window
    subject2.subscribe((x) => console.log(2, x))
}, 500)
