import { interval } from 'rxjs'

const observable1 = interval(40)
const observable2 = interval(30)

const subscription = observable1.subscribe((x) => console.log('parent: ' + x))
const childSubscription = observable2.subscribe((x) =>
    console.log('child: ' + x)
)

subscription.add(childSubscription)

setTimeout(() => {
    subscription.unsubscribe()
}, 100)
