function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

//practical example currying
function discount(discount, price) {
    return price * discount;
}
const curriedDiscount = curry(discount);
const tenPercentDiscount = curriedDiscount(0.1);

console.log(curriedDiscount(0.1)(500));
console.log(tenPercentDiscount(500));

// or partial application
const tenPercentDiscountWithPartialApplication = discount.bind(null, 0.1);
console.log(tenPercentDiscountWithPartialApplication(500));