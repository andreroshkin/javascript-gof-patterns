const createCounter = () => {
    let count = 0;

    return {
        click: () => (count += 1),
        getCount: () => count.toLocaleString(),
    };
};

const counter = createCounter();

counter.click();
counter.click();
counter.click();

console.log(counter.getCount()); // "3"
console.log(counter.count); // "undefined"
