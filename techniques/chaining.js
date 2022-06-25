class Calculator {
    constructor() {
        this.value = 0;
    }

    sum(...args) {
        this.value = args.reduce((sum, current) => sum + current, 0);
        return this;
    }

    addition(value) {
        this.value = this.value + value;
        return this;
    }

    subtraction(value) {
        this.value = this.value - value;
        return this;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2).addition(1).subtraction(2).value);