// TODO: add JSDoc 
export const memoize = (cacheResults, func) => {
    return (...args) => {
        const argsKey = args.join("");
        if (!cacheResults[argsKey]) {
            cacheResults[argsKey] = func(...args);
        }
        return cacheResults[argsKey];
    };
};
