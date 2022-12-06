let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++,
                };
            } else {
                return {
                    done: true,
                };
            }
        },
    };
};

for (const num of range) {
    console.log(num);
}

// generator
let range2 = {
    from: 1,
    to: 5,
};

range2[Symbol.iterator] = function* () {
    for (let value = this.from; value <= this.to; value++) {
        yield value;
    }
};

for (const num of range2) {
    console.log(num);
}
