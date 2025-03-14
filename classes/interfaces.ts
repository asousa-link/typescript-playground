interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

// extend the interface (e.g. if it came from a library)
interface Authenticatable {
    role: string;
}

let user: Authenticatable;

user = {
    email: "test@example.com",
    password: "abc1",
    role: "user",
    login() {
        // ...
    },
    logout() {
        // ...
    }
}