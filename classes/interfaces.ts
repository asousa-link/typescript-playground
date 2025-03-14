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

class AuthenticatableUser extends User implements Authenticatable {

    public role;

    constructor (public email: string, public password: string) {
        super();
        this.role = "User";
    }

    login() {}
    logout() {}
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