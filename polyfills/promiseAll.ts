export async function promiseAll(promises: any[]) {
    if (!promises.length) {
        return [];
    }

    const responses: any[] = [];

    for (let index = 0; index < promises.length; index++) {
        try {
            const promise = promises[index];
            const result = await promise;
            responses[index] = result;
        } catch (error) {
            throw error;
        }
    }

    return responses;
}

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

promiseAll([p1, p2, p3]).then((values) => {
    console.log(values);
});
