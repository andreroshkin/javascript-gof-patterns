class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`);
    }
}

let animal = new Animal("Мой питомец");

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} прячется!`);
    }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!
