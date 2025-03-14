let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
    [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T>(a: T, b: T): T[] {
    return [a, b];
}

const ids = merge(1, 2);