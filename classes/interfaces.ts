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

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {

    public role;

    constructor (public email: string, public password: string) {
        this.role = "User";
    }

    login() {}
    logout() {}
}

function authenticate(user: Authenticatable) {
    // ...
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