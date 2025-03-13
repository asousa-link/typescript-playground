function generateError(msg?: string) {
    throw new Error(msg);
}

generateError();

type UserT = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'
}

let input = "";
const inputNotNull = input ?? false;
const inputNotFalsy = input || false;