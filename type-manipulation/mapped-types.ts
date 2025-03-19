type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

// Mapped types iterate over keys of other types and map them to values (in this case number)
// ? makes the mapped properties optional
// -? removes the optional flag from the mapped properties
// readonly makes it impossible to be overwritten
// -readonly removes the readonly flag
type Results<T> = {
    readonly [Key in keyof T]?: number
};

let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(5, 2),
};

mathResults.add = 10;