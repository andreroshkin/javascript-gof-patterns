class ChatRoom {
    logMessage(user: User, message: string) {
        const sender = user.getName();
        console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
    }
}

class User {
    name: string;
    chatroom: ChatRoom;
    constructor(name: string, chatroom: ChatRoom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message: string) {
        this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
