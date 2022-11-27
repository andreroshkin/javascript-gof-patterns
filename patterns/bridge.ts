interface WebPage {
    getContent(): string;
}

interface Theme {
    getColor(): string;
}

class About implements WebPage {
    protected theme: Theme;
    constructor(theme: Theme) {
        this.theme = theme;
    }
    getContent(): string {
        return `About page in ${this.theme.getColor()}`;
    }
}

class Careers implements WebPage {
    protected theme: Theme;
    constructor(theme: Theme) {
        this.theme = theme;
    }
    getContent(): string {
        return `Careers page in ${this.theme.getColor()}`;
    }
}

class DarkTheme implements Theme {
    getColor(): string {
        return "Dark black";
    }
}

class LightTheme implements Theme {
    getColor(): string {
        return "Dark black";
    }
}

const darkTheme = new DarkTheme();

const aboutPage = new About(darkTheme);
const careersPage = new Careers(darkTheme);

console.log(aboutPage.getContent());
console.log(careersPage.getContent());
