interface IUser {
    firstName: String
    lastName: String
    email: String
}

const createUser = ({ firstName, lastName, email }: IUser) => ({
    firstName,
    lastName,
    email,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
});

const user1 = createUser({
    firstName: "Andrew",
    lastName: "Lee",
    email: "john@doe.com",
});

const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com",
});


console.log(user1);
console.log(user2);