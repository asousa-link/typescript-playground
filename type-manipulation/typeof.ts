let userName = "Afonso";
const userName2 = "Afonso";

console.log(typeof userName);

type UserName = typeof userName; // string
type UserName2 = typeof userName2; // "Afonso" (const)

const settings = {
    difficulty: "easy",
    minLevel: 10,
    didStart: false,
    players: ["John", "Jane"]
};

type Settings = typeof settings;

// Alternatively: function loadData(s: typeof settings) {}
function loadData(settings: Settings) {
    // ...
}

loadData(settings);

function sum(a: number, b: number) {
    return a + b;
}
function subtract(a: number, b: number) {
    return a - b;
}

function performMathAction(cb: typeof sum | typeof subtract) {
    //...
}

performMathAction(sum);
performMathAction(subtract);