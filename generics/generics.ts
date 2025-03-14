let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
    [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const ids = merge(1, 2);
const varied = merge('a', 1);


function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b }
}

const merged = mergeObj({ userName: "Afonso" }, { age: 31 });
console.log(merged);