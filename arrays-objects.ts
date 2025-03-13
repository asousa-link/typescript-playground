let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [5, "1"];

let possibleResults: [number, number];

possibleResults = [1, -1];
possibleResults = [5, 10, 12];

let user: {
    name: string;
    age: number | string;
    role: {
        description: string,
        id: number,
    }
} = {
    name: 'Max',
    age: 38,
    role: {
        description: "admin",
        id: 1,
    }
};

let val: {} = 'some text';
val = null;

let data: Record<string, number | string>;

