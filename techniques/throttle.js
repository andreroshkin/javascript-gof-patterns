// TODO: add JSDoc 
export const throttle = (func, ms) => {
    let isWaiting = false;
    return function () {
        if (isWaiting) {
            return;
        }

        isWaiting = true;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
            isWaiting = false;
        }, ms);
    };
};
