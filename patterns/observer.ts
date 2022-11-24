class Observable {
    observers: Function[];
    constructor() {
        this.observers = [];
    }

    subscribe(func: Function) {
        this.observers.push(func)
    }

    unsubscribe(func: Function) {
        this.observers = this.observers.filter(subscriber => subscriber !== func)
    }

    notify(data: string) {
        this.observers.forEach(observer => observer(data));
    }
}

const observable = new Observable();

function logger(data:string) {
    console.log(`logger: ${data}`);
}

observable.subscribe(logger);

observable.notify('New event');