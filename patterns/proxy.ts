interface Payment {
    pay(amount: number): void;
}

class RealMoney implements Payment {
    public pay(amount: number): void {
        console.log(`Successfully paid amount: ${amount}`);
    }
}

const realMoney = new RealMoney();

function prompt(message: string) {
    console.log(message);
    return "1234";
}

const creditCardProxy = new Proxy(realMoney, {
    get: (object, prop: keyof RealMoney) => {
        if (prop === "pay") {
            const pin = prompt("Please enter your PIN:");
            if (pin !== "1234") {
                const errorMsg = "PIN is not correct. Payment declined.";
                throw new Error(errorMsg);
            }
            return object[prop];
        }

        throw new Error("Function not implemented for credit card.");
    },
});

creditCardProxy.pay(50);
