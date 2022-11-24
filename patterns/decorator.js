function logger(message) {
    console.log(message);
}

function delay(func, ms) {
    return function (...args) {
        let self = this;
        setTimeout(() => {
            func.apply(self, args);
        }, ms);
    };
}

const log2s = delay(logger, 2000);
const log10s = delay(logger, 10000);

log2s('log2s');
log10s('log10s');