enum PromiseStatus {
    fulfilled = 'fulfilled',
    rejected = 'rejected',
    pending = 'pending'
}

interface PromiseResponse {
    status: PromiseStatus
    value?: any,
    reason?: any
}

export const allSettled = async (promises: any[]) => {
    if (!promises.length) {
        return [];
    }

    const responses: PromiseResponse[] = [];
    for (let index = 0; index < promises.length; index++) {
        try {
            const value = await promises[index];
            responses[index] = {
                status: PromiseStatus.fulfilled,
                value,
            };
        } catch (error) {
            responses[index] = {
                status: PromiseStatus.rejected,
                reason: error,
            };
        }
    }

    return responses;
};

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result))
);
