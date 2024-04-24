import { Subject } from 'rxjs'

const subject = new Subject<void>()

subject.subscribe(() => console.log('emitted'))

subject.next()
subject.next()
