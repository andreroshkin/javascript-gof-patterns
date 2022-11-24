const dog = {
    bark() {
        console.log("Гав");
    },
};

const pet1 = Object.create(dog);

pet1.bark();
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prorotype: ", Object.keys(pet1.__proto__));
