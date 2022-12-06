let dictionary = {
    Hello: "Hola",
    Bye: "Adiós",
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    },
});

console.log(dictionary["Hello"]); // Hola
console.log(dictionary["Welcome to Proxy"]); // Welcome to Proxy

let range = {
    start: 1,
    end: 10,
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end;
    },
});

console.log(5 in range); 
console.log(50 in range); 
