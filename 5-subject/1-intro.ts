import { Subject, from } from 'rxjs'
import { sectionBreak } from '../global'

const subject = new Subject<number>()

// multiple subscribers
subject.subscribe((x) => console.log('observer 1', x))
subject.subscribe((x) => console.log('observer 2', x))

// values multicasted
subject.next(1)
subject.next(10)

sectionBreak()

const observable = from([10, 15, 20])
// observable is converted to multicast
observable.subscribe(subject)
