Function.prototype.bind = function (context, ...args) {
    const func = this;
    return function (...newArgs) {
        func.apply(context, [...args, ...newArgs]);
    }
}

const errorLevel = {
    levelName: 'error'
}

const padding = 8;

const log = function (padding, message) {
    console.log(`${this.levelName.padEnd(padding)}: ${message}`);
}

const errorLog = log.bind(errorLevel, padding);

errorLog('404 error');