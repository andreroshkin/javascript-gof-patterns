interface Sedan {}
interface Coupe {}

interface CarsFactory {
    createCoupe(): Coupe;
    createSedan(): Sedan;
}

class ToyotaCoupe implements Coupe {
    constructor() {
        console.log('Create ToyotaCoupe');
    }
}

class ToyotaSedan implements Sedan {
    constructor() {
        console.log('Create ToyotaSedan');
    }
}

class ToyotaFactory implements CarsFactory {
    createCoupe(): Coupe {
        return new ToyotaCoupe();
    }
    createSedan(): Sedan {
        return new ToyotaSedan();
    }
}

class FordCoupe implements Coupe {
    constructor() {
        console.log('Create FordCoupe');
    }
}

class FordSedan implements Sedan {
    constructor() {
        console.log('Create FordSedan');
    }
}

class FordFactory implements CarsFactory {
    createCoupe(): Coupe {
        return new FordCoupe();
    }
    createSedan(): Sedan {
        return new FordSedan();
    }
}

const factory1 = new ToyotaFactory();
const factory2 = new FordFactory();

factory1.createCoupe();
factory1.createSedan();

factory2.createCoupe();
factory2.createSedan();