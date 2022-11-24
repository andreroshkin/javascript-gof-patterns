class User {
    constructor(
        public name?: string,
        public age?: number,
        public email?: string
    ) {}
}

class UserBuilder {
    public name?: string;
    public age?: number;
    public email?: string;

    setName(name: string) {
        this.name = name;
        return this;
    }

    setAge(age: number) {
        this.age = age;
        return this;
    }

    setEmail(email: string) {
        this.email = email;
        return this;
    }

    build() {
        return new User(this.name, this.age, this.email);
    }
}

const user = new UserBuilder()
    .setAge(30)
    .setEmail("test@test.com")
    .setName("test")
    .build();

console.log(user);