function generateError(msg?: string) {
    throw new Error(msg);
}

generateError();

type UserT = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'
}