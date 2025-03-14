interface Authenticatable {
    email: string;
    password: string;

    login(email: string, password: string): void;
    logout(): void;
}