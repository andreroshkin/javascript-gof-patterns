class EditorMemento {
    protected content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent() {
        return this.content;
    }
}

class Editor {
    protected content: string = "";

    type(words: string) {
        this.content = this.content + " " + words;
    }

    public getContent() {
        return this.content;
    }

    public save() {
        return new EditorMemento(this.content);
    }

    public restore(memento: EditorMemento) {
        this.content = memento.getContent();
    }
}

const editor = new Editor();
editor.type("This is the first sentence.");
editor.type("This is second.");
const saved = editor.save();
editor.type("And this is third.");
console.log(editor.getContent());
editor.restore(saved);
console.log(editor.getContent());
