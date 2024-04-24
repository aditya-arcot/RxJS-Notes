import { BehaviorSubject } from 'rxjs'

const subject = new BehaviorSubject(0)

// receives initial value
subject.subscribe((x) => console.log(1, x))

// multicast to all subscribers
subject.next(1)

// receives current value
subject.subscribe((x) => console.log(2, x))

// multicast to all subscribers
subject.next(2)
