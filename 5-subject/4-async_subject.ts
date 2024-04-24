import { AsyncSubject } from 'rxjs'

const subject = new AsyncSubject()

// receives only last value
subject.subscribe((x) => console.log(1, x))

subject.next(1)
subject.next(2)
subject.next(3)

// receives only last value
subject.subscribe((x) => console.log(2, x))

subject.next(4)
subject.complete()
