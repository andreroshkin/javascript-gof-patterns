abstract class Builder {
    // Template method
    public build() {
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    }

    public abstract test(): void;
    public abstract lint(): void;
    public abstract assemble(): void;
    public abstract deploy(): void;
}

class AndroidBuilder extends Builder {
    public test() {
        console.log("Running android tests");
    }

    public lint() {
        console.log("Linting the android code");
    }

    public assemble() {
        console.log("Assembling the android build");
    }

    public deploy() {
        console.log("Deploying android build to server");
    }
}

class IosBuilder extends Builder {
    public test() {
        console.log("Running ios tests");
    }

    public lint() {
        console.log("Linting the ios code");
    }

    public assemble() {
        console.log("Assembling the ios build");
    }

    public deploy() {
        console.log("Deploying ios build to server");
    }
}

const androidBuilder = new AndroidBuilder();
androidBuilder.build();
console.log("---");
const iosBuilder = new IosBuilder();
iosBuilder.build();
