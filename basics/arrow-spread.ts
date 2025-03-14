const person = {
    name: "Afonso",
    age: 30
};

const clonedPerson = { ...person };

for (var i in clonedPerson)
    console.log(i, clonedPerson[i]);

let add = (a: number, b: number = 5) => a + b;

console.log(add(3));
console.log(add(2, 3));

let addAny = (...numbers: number[]) => {
    return numbers.reduce((acc, x) => acc + x, 0);
};

console.log(addAny(1));
console.log(addAny(1, 2));
console.log(addAny(1, 2, 3));
console.log(addAny(1, 2, 3, 4));

const sports = ["Hiking", "Swimmming"];

const [sport1, sport2, ...remainingSports] = sports;

console.log(sports, sport1, sport2, remainingSports);

const { name: userName, age: userAge } = person;

console.log(userName, userAge);