const delayedResponses = {
    delays: [500, 1300, 2500],

    wait(delay) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    },

    async *[Symbol.asyncIterator]() {
        for (const delay of this.delays) {
            await this.wait(delay);
            yield `Delayed response for ${delay} milliseconds`;
        }
    },
};

(async () => {
    for await (const response of delayedResponses) {
        console.log(response);
    }
})();
