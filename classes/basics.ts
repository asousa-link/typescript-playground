/* class User {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
} */

// Alternative
class User {
    public hobbies: string[] = [];

    constructor (private name: string, public age: number) {}

    greet() {
        console.log("My name is " + this.name + " and I'm " + this.age + " years old.")
    }
};

const afonso = new User("Afonso", 31);
const fred = new User("Fred", 35);

console.log(afonso, fred);

fred.age = 33;
fred.greet();