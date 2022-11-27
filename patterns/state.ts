interface WritingState {
    write(words: string): void;
}

class UpperCase implements WritingState {
    write(words: string): void {
        console.log(words.toUpperCase());
    }
}

class LowerCase implements WritingState {
    write(words: string): void {
        console.log(words.toLowerCase());
    }
}

class DefaultText implements WritingState {
    write(words: string): void {
        console.log(words);
    }
}

class TextEditor {
    protected state: WritingState;

    constructor(state: WritingState) {
        this.state = state;
    }

    public setState(state: WritingState) {
        this.state = state;
    }

    public type(words: string) {
        this.state.write(words);
    }
}

const editor = new TextEditor(new DefaultText());
editor.type("First line");
editor.setState(new UpperCase());
editor.type("Second line");
editor.type("Third line");
editor.setState(new LowerCase());
editor.type("Fourth line");
editor.type("Fifth line");
